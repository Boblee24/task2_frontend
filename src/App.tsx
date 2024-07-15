import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import CheckOut from './pages/CheckOut';
import Main from './pages/Main';
import { useQuery } from '@tanstack/react-query';
import ProductDisplay from './pages/ProductDisplay';
import Footer from './components/Footer';
import Deal from './components/Deal';

export interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
  photos: any;
  current_price: any;
}

export interface CartItem extends Food {
  quantity: number;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const location = useLocation();
  const showPagination = location.pathname === '/';

  const fetchProducts = async (page: number) => {
    const response = await fetch(`https://task2-backend.vercel.app/api/products?page=${page}&size=10`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ['food', currentPage],
    queryFn: () => fetchProducts(currentPage),
  });

  const [productItems, setProductItems] = useState<Food[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (food: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === food.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...food, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    if (data && data.items) {
      setProductItems(data.items);
    }
  }, [data]);

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="App bg-[#DA291C] max-w-[1440px] m-auto">
      <Navbar count={cartItems.length} />
      <Hero />
      <Routes>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Main
                  productItems={productItems}
                  handleAddToCart={handleAddToCart}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              }
            />
            <Route path="/:name" element={<ProductDisplay productItems={productItems} handleAddToCart={handleAddToCart} />} />
          </>
        )}
        <Route path='/checkout' element={<CheckOut cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
      {showPagination && (
        <div className="pagination-controls flex justify-between mt-4 w-[200px] m-auto">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`bg-[#fff078] py-2 px-4 rounded-lg font-semibold ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === 3}
            className={`bg-[#fff078] py-2 px-4 font-semibold rounded-lg ${currentPage === 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      )}
      <Deal />
      <Footer />
    </div>
  );
};

export default App;
