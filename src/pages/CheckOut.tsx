import { CartItem } from "../App";
import phone from "../assets/phone.svg"

interface CheckOutProps {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CheckOut: React.FC<CheckOutProps> = ({ cartItems, setCartItems }) => {



    const handleIncreaseQuantity = (foodId: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === foodId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (foodId: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === foodId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };
    const handleRemoveItem = (foodId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== foodId));
    };
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.current_price[0].NGN[0] * item.quantity, 0).toFixed(2);
    };

    return (
        <div className=''>
            <div className="mx-2">
                <h2 className="text-[2rem] text-[#FFF078] font-semibold text-center">Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-[#FFF078] font-semibold text-center mb-2">Your cart is empty.</p>
                ) : (
                    <div className="md:grid checkout">
                        {cartItems.map((food, index) => (
                            <div className="flex justify-center items-center w-full h-full">
                                <div key={index} className="my-[2rem] flex justify-between items-center md:flex-col w-full ">
                                    <div>
                                        <img src={`https://api.timbu.cloud/images/${food.photos[0]?.url}`} alt={food.name} className="w-[150px] md:w-[200px] md:m-auto" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-[1.2rem] md:text-[1.4rem] text-[#FFF078] md:text-center">{food.name}</h2>
                                        <p className="text-[#FFF078] font-semibold my-3 text-[1rem] md:text-[1.1rem] md:text-center">₦{food.current_price[0].NGN[0].toFixed(2)}</p>
                                        <div className="flex gap-5 md:flex-row-reverse">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => handleDecreaseQuantity(food.id)}
                                                    className="bg-[#06D001] font-semibold text-black px-2 py-1 rounded-l"
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2 text-black px-3 py-1 font-semibold bg-white">{food.quantity}</span>
                                                <button
                                                    onClick={() => handleIncreaseQuantity(food.id)}
                                                    className="bg-[#06D001] font-semibold text-black px-2 py-1 rounded-r"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => handleRemoveItem(food.id)}
                                                className="bg-red-500 text-black font-bold px-3 py-1 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <hr className='my-4' />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <div className="flex gap-1 justify-center mt-4 mb-8">
                        <img src={phone} alt="phone" className="px-[1rem] py-[.8rem] border-2 border-solid border-[#FF7F3E] rounded-md" />
                        <button className="text-[1rem] md:text-[24px] text-[white] border-2 border-solid border-white bg-[#FF7F3E] px-[3rem] py-[.8rem] rounded-md">
                            {`CHECKOUT (₦${calculateTotal()})`}
                        </button>
                    </div>
                )}
            </div>

        </div>

    );
};

export default CheckOut;