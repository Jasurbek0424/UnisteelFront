import React, { useEffect, useState } from 'react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { FaWhatsapp, FaArrowDownShortWide } from "react-icons/fa6";

import Logo from '../../assets/logo.png';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt, FaTimes, FaRegFilePdf } from 'react-icons/fa';
import MyGallery from '../MyGallery';
import { fetchInformation, Information } from '../../api/api';
import './NavBar.css';





const NavBar: React.FC = () => {

    const [showNav, setShowNav] = useState(false);
    const [showNavList, setShowNavList] = useState(false);
    const [information, setInformation] = useState<Information | null>(null);

    const toggleNav = () => {
        setShowNav(!showNav);
        if (!showNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClick = () => {
        setShowNavList(false)
    }
    const toggleNavList = () => {
        setShowNavList(!showNavList);
        if (!showNavList) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchInformation();
            setInformation(data);
        };
        fetchData();
    }, []);


    return (
        <nav className='py-2 flex justify-between items-center px-4 bg-white'>
            <a href="">
                <img src={Logo} alt="" className='w-[100px] sm:w-[130px] lg:w-[150px]' />
            </a>

            <button
                onClick={toggleNavList}
                className='md:hidden cursor-pointer text-2xl'>
                <FaArrowDownShortWide />
            </button>

            <ul

                className={`flex gap-6 font-heebo700 font-bold text-lg lg:text-xl menu 
                ${showNavList ? 'active' : ''}`}>
                <button onClick={toggleNavList} className='md:hidden mb-10'>
                    <FaTimes />
                </button>
                <li>
                    <a
                        onClick={handleClick}
                        href="#products" className='hover:text-primary transition-all'>
                        Продукция
                    </a>
                </li>
                <li>
                    <a
                        onClick={handleClick}
                        href="#about" className='hover:text-primary transition-all'>
                        О компании
                    </a>
                </li>
                <li>
                    <a
                        onClick={handleClick}
                        href="#servises" className='hover:text-primary transition-all'>
                        Услуги
                    </a>
                </li>
                <li>
                    <a
                        onClick={handleClick}
                        href="#footer" className='hover:text-primary transition-all'>
                        Контакты
                    </a>
                </li>
                {showNavList && (
                    <div
                        className="absolute inset-0 bg-secondary opacity-90 -z-10"
                        onClick={toggleNavList}
                    />
                )}

            </ul>

            <div className={`fixed inset-y-0 px-6 pt-10 top-0 right-0 w-[300px] bg-secondary text-white 
            z-50 transform transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0'
                    : 'translate-x-full'}`}>
                <button onClick={toggleNav} className='absolute right-10 text-2xl'>
                    <FaTimes />
                </button>

                <div className='flex flex-col gap-4 justify-center h-full text-center'>
                    <h3>
                        Металлопрокат и металлоконструкции
                    </h3>

                    <a href="http://127.0.0.1:8000/media/rekvizit/rekviziti.xlsx"
                        className='flex items-center gap-2 justify-center'>
                        <FaRegFilePdf className='text-red-500' />
                        Реквизиты
                    </a>

                    <div>
                        <MyGallery />
                    </div>

                    <ul className='text-sm flex flex-col justify-center gap-1'>
                        <li>
                            <a href="#!" className='flex items-center gap-1'>
                                <MdLocationOn className='flex-shrink-0 text-lg' />
                                {information?.address}
                            </a>
                        </li>
                        <li><a href={`tel:${information?.number1}`}
                            className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-sm' />
                            {information?.number1}
                        </a>
                        </li>
                        <li>
                            <a href={`tel:${information?.number1}`}
                                className='flex items-center gap-1'>
                                <FaPhoneAlt className='text-sm' />
                                {information?.number2}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${information?.number1}`}
                                className='flex items-center gap-1'>
                                <FaPhoneAlt className='text-sm' />
                                {information?.number3}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${information?.email}`}
                                className='flex items-center gap-1'>
                                <MdEmail />
                                {information?.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex gap-6'>
                <a href="https://wa.me/+77007192085" className='p-2 text-white text-2xl bg-green-500 
                rounded-md sm:block hidden'>
                    <FaWhatsapp />
                </a>
                <button className='rotate-180 text-2xl sm:text-3xl' onClick={toggleNav}>
                    <HiMiniBars3CenterLeft />
                </button>
            </div>
            {
                showNav && (
                    <div
                        className="fixed inset-0 bg-secondary opacity-40 z-40"
                        onClick={toggleNav}
                    />
                )
            }
        </nav >
    );
};

export default NavBar;