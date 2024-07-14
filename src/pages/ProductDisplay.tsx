import React, { useRef, useEffect, useState } from 'react';
import { Food } from '../App';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductDisplayProps {
    productItems: Food[];
    handleAddToCart: (food: Food) => void;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ productItems, handleAddToCart }) => {
    const { name } = useParams<{ name: any }>();
    const product = productItems.find((item) => item.name === name);

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }

    // Duplicate the images array 5 times
    const duplicatedPhotos = Array(5).fill(product.photos).flat();

    const settingsMain = {
        asNavFor: nav2,
        arrows: false,
        ref: (slider: Slider) => (sliderRef1.current = slider),
    };

    const settingsThumbs = {
        asNavFor: nav1,
        ref: (slider: Slider) => (sliderRef2.current = slider),
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    return (
        <div key={product.id} className='mx-[2rem] py-4 max-w-[1124px]'>
            <h1 className="text-[1.3rem] md:text-[1.5rem] py-3 leading-8 text-[#FFF078]">{product.name}</h1>
            <div className='flex flex-col gap-4 md:flex-row md:justify-around md:gap-10'>
                <div className='max-w-[400px]'>
                    <div className='rounded-lg '>
                        <Slider {...settingsMain}>
                            {duplicatedPhotos.map((photo: any, index: number) => (
                                <div key={index} className='max-w-[350px] h-[350px]'>
                                    <img src={`https://api.timbu.cloud/images/${photo.url}`} className='rounded-lg h-full w-full' alt={`${product.name} ${index}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div>
                        <Slider {...settingsThumbs}>
                            {duplicatedPhotos.map((photo: any, index: number) => (
                                <div key={index} className='w-[100px] h-[100px]'>
                                    <img src={`https://api.timbu.cloud/images/${photo.url}`} className='rounded-lg h-full' alt={`${product.name} ${index}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div>
                    <p className="text-[#FFF078] text-[1rem] md:text-[1.2rem]">{product.description}</p>
                    <p className="text-[#FFF078] font-semibold my-3 text-[1.3rem]" >₦{product.current_price[0].NGN[0].toFixed(2)}</p>
                    <button onClick={() => handleAddToCart(product)} className="bg-[#fff078] flex items-center rounded-lg py-1 px-2 md:my-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
