import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
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
        <div>
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
