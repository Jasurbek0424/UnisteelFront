import React, { useState } from 'react';
import ModalComponent from "./Modal";
import FormComponent from "./Form";

const Partner: React.FC = () => {

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
        <>
            <div className="flex flex-col gap-4 max-w-[580px] w-full text-white px-4">
                <h2 className=" font-libre700 font-bold text-xl sm:text-2xl lg:text-4xl -space-x-0.5 lg:mb-5">
                    Надежный партнер для вашего бизнеса:
                    широкий выбор металлопроката от
                    компании Unisteel
                </h2>
                <p className="text-md md:text-lg sm:text-start text-justify">
                    Если вы ищете надежного поставщика металлопроката для вашего
                    бизнеса, то компания Unisteel готова предложить вам широкий выбор
                    высококачественной продукции. Наш металлопрокат производится на
                    современных заводах, оборудованных передовыми технологиями, что
                    позволяет нам гарантировать высокое качество продукции и ее
                    соответствие стандартам безопасности.
                </p>
                <button
                    onClick={openModal}
                    className='text-white w-[120px] sm:w-[150px] lg:w-[180px] py-2 bg-primary text-xs sm:text-md lg:text-lg font-heebo700 font-bold hover:bg-blue-700 rounded'>
                    Оставить заявку
                </button>
                <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
                    <button onClick={closeModal} className='w-full flex justify-end mb-4 tracking-widest font-libre700 font-bold text-xl text-secondary'>X</button>
                    <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Оставить заявку</h2>
                    <FormComponent onSubmitSuccess={handleFormSubmitSuccess} />
                </ModalComponent>
            </div>
        </>
    );
};

export default Partner;