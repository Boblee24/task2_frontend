import cart from "../assets/cart2.svg"
import { Food } from "../App";
import { useNavigate } from "react-router-dom";


interface MainProps {
    handleAddToCart: (food: Food) => void;
    productItems: Food[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Main: React.FC<MainProps> = ({ handleAddToCart, productItems, currentPage, setCurrentPage }) => {
    const navigate = useNavigate();

    
    const truncateDescription = (description: string | undefined, maxLength: number) => {
        if (!description) return '';
        if (description.length > maxLength) {
          return description.slice(0, maxLength) + '...';
        }
        return description;
      };

    return (
        <div>
            <div className='px-[2rem] w-full'>
                <div className="flex items-center flex-col justify-center w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        {productItems?.map((food: Food) => (
                            <div onClick={() => {
                                navigate(`/${food.name}`)
                            }}>
                                <div key={food.id} className="my-[2rem] flex flex-col px-10 cursor-pointer">
                                    <img src={`https://api.timbu.cloud/images/${food.photos[0].url}`} alt={food.name} className="rounded-full w-2/3 m-auto md:m-0" />
                                    <h2 className="text-[1.3rem] md:text-[1.5rem] py-3 leading-8 text-[#FFF078]">{food.name}</h2>
                                    <p className="text-[#FFF078] text-[.9rem] md:text-[.9rem] md:h-[150px]">{truncateDescription(food.description, 150)}</p>
                                    <p className="text-[#FFF078] font-semibold my-3 text-[1.2rem]">₦{food.current_price[0].NGN[0].toFixed(2)}</p>
                                    <button onClick={() => handleAddToCart(food)} className="bg-[#fff078] flex items-center m-auto rounded-lg py-1 px-2 md:my-4">
                                        <h3 className='text-[#FF0000]'>Buy Now</h3>
                                        <img src={cart} className='fill-[red]' alt="" />
                                    </button>
                                </div>
                                <hr className='my-4' />
                            </div>
                        ))}
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}

export default Main