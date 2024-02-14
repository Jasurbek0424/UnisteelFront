import React, { useEffect, useState } from 'react';
import { sendContactFormData, fetchInformation, Information } from '../../api/api';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


const Footer: React.FC = () => {

    const [contactNumber, setContactNumber] = useState<string>('');
    const [information, setInformation] = useState<Information | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (/^\+?\d*$/.test(value)) {
            setContactNumber(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!contactNumber.trim()) {
            alert('Пожалуйста, введите контактный номер.');
            return;
        }

        const formData = new FormData();
        formData.append('contact', contactNumber);

        const success = await sendContactFormData(formData);
        if (success) {
            alert('Контактный номер успешно отправлен.');
            setContactNumber('');
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
        <footer id='footer' className='bg-footer py-10 scroll-smooth'>
            <div className='container'>
                <div className='text-white flex items-start justify-between flex-wrap mb-8 px-4 gap-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-400'>
                            Навигация
                        </p>
                        <a href="#!">Продукция</a>
                        <a href="#!">О компании</a>
                        <a href="#!">Услуги</a>
                        <a href="#!">Контакты</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-400'>
                            Контакты
                        </p>
                        <a href="#!" className='flex items-center gap-1'>
                            <MdLocationOn />
                            Казахстан, г. Алматы, проспект Рыскулова 63</a>
                        <a href={`tel:${information?.number1}`}
                            className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-sm' />
                            {information?.number1}
                        </a>
                        <a href={`tel:${information?.number2}`}
                            className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-sm' />
                            {information?.number2}
                        </a>
                        <a href={`tel:${information?.number3}`}
                            className='flex items-center gap-1'>
                            <FaPhoneAlt className='text-sm' />
                            {information?.number3}
                        </a>
                        <a href={`mailto:${information?.email}`}
                            className='flex items-center gap-1'>
                            <MdEmail />
                            {information?.email}
                        </a>
                    </div>
                    <div className='max-w-[320px] lg:max-w-[380px] w-full flex flex-col gap-4'>
                        <h2 className='text-lg sm:text-xl lg:text-2xl font-heebo700 font-bold'>
                            Обратная связь
                        </h2>
                        <p className=''>
                            Отправьте свой номер телефона и мы
                            свяжемся с вами в ближайшее время
                        </p>
                        <form onSubmit={handleSubmit} className='flex'>
                            <input
                                type="text"
                                id="contact_number"
                                name="contact_number"
                                autoComplete='contact'
                                value={contactNumber}
                                onChange={handleChange}
                                className="border rounded-s px-3 py-2 w-full text-secondary"
                                placeholder='Контактный номер'
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary px-4 hover:bg-blue-700 text-white font-bold py-2 rounded-e"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
                <hr className='opacity-50' />
                <div className='flex justify-between px-4 mt-8 text-white'>
                    <a href="https://wa.me/+77007192085"
                        className='w-[35px] h-[35px] text-lg flex justify-center items-center bg-secondary'>
                        <FaWhatsapp />
                    </a>
                    <div className='flex gap-6'>
                        <a href="tel:+77007192085" className='flex gap-2 items-center'>
                            <FaPhoneAlt />
                            Позвонить
                        </a>
                        <a href="mailto:toounisteel@gmail.com" className='flex gap-2 items-center'>
                            <MdEmail />
                            Написать
                        </a>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-gray-400 text-center'>
                        Copyright © 2023 Unisteel | Powered by IPROD.KZ
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;