import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import blackcart from "../assets/cart.svg"
import whitecart from "../assets/whitecart.svg"
import logo from "../assets/logo.svg"
import vector from "../assets/notify.svg"
import profile from "../assets/profile.jpg"

interface navProps {
    count : number
}

const Navbar: React.FC<navProps> = ({count}) => {

    const [cartImage, setCartImage] = useState(blackcart);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/checkout") {
      setCartImage(whitecart);
    } else {
      setCartImage(blackcart);
    }
  }, [location.pathname]);

    return (
        <div className='flex justify-around items-center fixed top-0 w-full bg-[#DA291C] z-30 '>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div className='flex gap-[3rem]'>
                <Link to="/" className='text-[#FFF078] hidden md:block'>Home</Link>
                <Link to="/" className='text-[#FFF078] hidden md:block'>Download App</Link>
                <Link to="/" className='text-[#FFF078]'>Exclusive Offer</Link>
            </div>
            <div className='hidden'>
                Search Bar
            </div>
            <div className='flex gap-3 md:gap-6'>
                <Link to="./checkout" className='relative'>
                    <img src={cartImage} alt='cartImage'width={25} />
                    {
                        count>= 1 && <h1 className='h-4 w-4 bg-[#FFF078] absolute top-[-7px] right-[-7px] px-1 leading-[.9rem] rounded-full font-semibold'>{count}
                    </h1>
                    }
                </Link>
                <div>
                    <img src={vector} width={20} alt='NotificationImage' />
                </div>
                <div>
                    <img src={profile} width={30} alt='profile' className='rounded-[50%]' />
                </div>
            </div>
        </div>
    )
}

export default Navbar