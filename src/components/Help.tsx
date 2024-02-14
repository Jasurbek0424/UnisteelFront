import React, { useState } from 'react';
import ModalComponent from "./Modal";
import FormComponent from "./Form";

import { FaArrowRightLong } from "react-icons/fa6";



const Help: React.FC = () => {
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
            <div className="flex md:flex-nowrap flex-wrap w-full justify-between items-center lg:items-end 
            px-4 gap-4 text-secondary">
                <div>
                    <h2 className=" font-libre700 font-bold text-xl sm:text-2xl lg:text-4xl -space-x-0.5 mb-3 md:mb-5">
                        Нужна помощь?
                    </h2>
                    <p className="text-md lg:text-lg">
                        Обратитесь к нам и мы вам окажем все необходимые вам услуги, а также реализуем металлопрокат под ваши
                        нужды
                    </p>
                </div>
                <button
                    onClick={openModal}
                    className='text-white gap-4 md:w-[230px] py-2 bg-primary text-sm md:text-lg font-heebo700 
                    flex justify-between items-center px-4 font-bold hover:bg-blue-700 rounded flex-shrink-0'>
                    Оставить заявку <FaArrowRightLong />
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

export default Help;