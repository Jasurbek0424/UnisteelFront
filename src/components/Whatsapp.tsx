import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Whatsapp: React.FC = () => {



    return (
        <div>

            <a href='https://wa.me/+77007192085' className="scroll-to-top 2xl:text-5xl xl:text-4xl lg:text-3xl
                 md:text-2xl sm:text-xl text-xl shadow-emerald-50 shadow
                fixed bottom-5 left-5 p-2 bg-green-500 text-white cursor-pointer rounded z-30"
            >
                <FaWhatsapp />
            </a>
        </div>
    );
};

export default Whatsapp;
