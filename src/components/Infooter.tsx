import React from 'react'
import logo from "../assets/logo.svg"
import vector from "../assets/footerblack.svg"
import play from "../assets/play.svg"
import apple from "../assets/apple.svg"

const Infooter = () => {
    return (
        <div className='w-full p-[.9rem] bg-white'>
            <div className='flex justify-center items-center m-[1.5rem]'>
                <img src={vector} alt="" />
            </div>
            <div className='flex justify-between md:justify-around'>
                <div>
                    <h4 className='text-[#DA291C] text-[.9rem] mb-3 font-semibold md:text-[1.2rem]'>Quick Links</h4>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Know More about us</a>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Visit Our store</a>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Locate Store</a>
                </div>
                <div>
                    <h4 className='text-[#DA291C] mb-3 text-[.9rem] md:text-[1.2rem] font-semibold'>Site Links</h4>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Privacy Policy</a>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Shopping Details</a>
                    <a href='/' className='text-[.7rem] md:text-[.9rem] text-[#DA291C] block mb-2'>Offers Coupons</a>
                </div>
                <div className='ml-2'>
                    <h4 className='text-[#DA291C] text-[.9rem] mb-4 font-semibold md:text-[1.2rem]'>Download Mobile App</h4>
                    <div className='flex border-[#DA291C] border-2 border-solid mb-[.9rem] rounded-lg p-1 w-[120px] gap-1'>
                        <img src={play} alt="downloadLogo" />
                        <p className='leading-[15px] text-[.6rem]'>Get it on Playstore</p>
                    </div>
                    <div className='flex border-[#DA291C] border-2 border-solid rounded-lg p-1 w-[105px] gap-1'>
                        <img src={apple} alt="downloadLogo" />
                        <p className='leading-[15px] text-[.6rem]'>Available on Appstore</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-[2rem] md:justify-start gap-2 md:gap-[30%]'>
                <img src={logo} alt="logo" />
                <div>
                    <p className='text-[.7rem] md:text-[.9rem] text-[#DA291C] text-center'>If you need any help, contact self-help  on +2349139965381</p>
                    <h4 className='text-center text-[.9rem] text-[#DA291C]'>Ikeja, Lagos</h4>
                </div>
            </div>
        </div>
    )
}

export default Infooter