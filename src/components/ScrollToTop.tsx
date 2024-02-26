import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaPhoneAlt } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);
    const [showButtonPhone, setShowButtonPhone] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
                setShowButtonPhone(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='relative flex flex-col max-w-[150px] w-full'>
            {showButtonPhone && (
                <a href='https://wa.me/+77007192085' className=" sm:hidden
                scroll-to-top 2xl:text-5xl xl:text-4xl lg:text-3xl
                md:text-2xl sm:text-xl text-xl shadow-emerald-50 shadow
               fixed bottom-16 right-5 p-2 bg-green-600 text-white cursor-pointer rounded-full animate-bounce z-30"
                >
                    <FaPhoneAlt />
                </a>
            )}

            {showButton && (
                <button className="scroll-to-top 2xl:text-5xl xl:text-4xl lg:text-3xl
                 md:text-2xl sm:text-xl text-xl shadow-emerald-50 shadow
                fixed bottom-5 right-5 p-2 bg-primary text-white cursor-pointer rounded z-30"
                    onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
