// Hero.tsx
import React, { useState } from 'react';
import ModalComponent from '../Modal';
import FormComponent from '../Form';

const Hero: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleFormSubmitSuccess = () => {
        closeModal();
    };

    return (
        <header className='relative bg-hero py-14 sm:py-20 lg:py-28 bg-cover bg-center bg-no-repeat 
        after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0
        after:opacity-50 after:-z-0'>
            <div className='container text-white px-4 relative z-10' >
                <h1 className='font-libre800 font-extrabold text-2xl sm:text-3xl lg:text-5xl sm:max-w-[400px]'>
                    ОПТОВО-
                    РОЗНИЧНАЯ
                    ПРОДАЖА
                    МЕТАЛЛОПРОКАТА
                </h1>
                <p className='font-heebo400 text-md sm:text-lg lg:text-xl max-w-[500px] my-4'>
                    Свяжитесь с нами любым удобным Вам способом — мы
                    выполним заказ по поставке необходимого Вам
                    металлопроката, в самые короткие сроки!
                </p>
                <button
                    onClick={openModal}
                    className='w-[150px] lg:w-[180px] py-2 bg-primary text-md lg:text-lg font-heebo700 font-bold hover:bg-blue-700 rounded'>
                    Оставить заявку
                </button>
                <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <button onClick={closeModal} className='w-full flex justify-end mb-4 tracking-widest font-libre700 font-bold text-xl text-secondary'>X</button>
                    <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Оставить заявку</h2>
                    <FormComponent onSubmitSuccess={handleFormSubmitSuccess} />
                </ModalComponent>
            </div>
        </header >
    );
};

export default Hero;
