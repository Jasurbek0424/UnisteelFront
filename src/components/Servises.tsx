import React, { useEffect, useState } from "react";
import ModalComponent from "./Modal";
import FormComponent from "./Form";
import { ServisesProps } from "../api/api";
import { fetchServises } from "../api/api";

const Servises: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<ServisesProps | null>(null);
    const [servises, setServises] = useState<ServisesProps[] | null>(null);

    const openModal = (service: ServisesProps) => {
        setSelectedService(service);
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        setModalIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleFormSubmitSuccess = () => {
        closeModal();
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchServises();
            setServises(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="flex md:flex-nowrap flex-wrap w-full gap-6 2xl:gap-10 justify-center md:justify-between px-4">
                <div className="flex flex-col gap-4 lg:max-w-[360px] xl:max-w-[380px] ">
                    <h3 className="text-primary">
                        Услуги
                    </h3>
                    <h2 className="text-secondary font-libre800 font-extrabold text-xl sm:text-2xl lg:text-4xl -space-x-0.5 md:mb-5">
                        Наши услуги
                    </h2>
                    <p className="">
                        Ежегодно компания ТОО «Юнистил» обслуживает более 1000 клиентов, большинство из которых становятся её постоянными покупателями.
                    </p>
                    <button onClick={() => openModal(selectedService!)} className='text-white w-[150px] lg:w-[180px] py-2 bg-primary text-md lg:text-lg font-heebo700 font-bold hover:bg-blue-700 rounded'>
                        Оставить заявку
                    </button>
                    <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
                        {selectedService && (
                            <>
                                <div className="max-w-[500px] text-secondary flex flex-col h-screen overflow-y-auto px-2 py-5">
                                    <button onClick={closeModal} className='w-full flex justify-end mb-4 tracking-widest font-libre700 font-bold text-xl text-secondary'>X</button>
                                    <img src={selectedService.image} alt="" className="w-full" />
                                    <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">{selectedService.title}</h2>
                                    <p className="text-sm">{selectedService.infoPreTitle}</p>
                                    <h3 className="text-xl font-bold my-2">{selectedService.infoTitle}</h3>
                                    {selectedService.infoText.split('\n').map((paragraph, index) => (
                                        <p key={index} className="text-sm mb-1 text-justify">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                            </>
                        )}
                        {!selectedService && (
                            <>
                                <button onClick={closeModal} className='w-full flex justify-end mb-4 tracking-widest font-libre700 font-bold text-xl text-secondary'>X</button>
                                <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Оставить заявку</h2>
                                <FormComponent onSubmitSuccess={handleFormSubmitSuccess} />
                            </>
                        )}
                    </ModalComponent>
                </div>
                <div className="flex w-full justify-center lg:justify-end flex-wrap gap-5">
                    {servises?.map(service => (
                        <div key={service.id} className="max-w-[350px] sm:max-w-[260px] md:max-w-[260px] xl:max-w-[350px] pb-4 bg-white border">
                            <img src={service.image} alt={service.title} />
                            <div className="text-center px-2 h-[165px] flex flex-col justify-between gap-3 mt-4">
                                <h3 className="font-libre700 font-bold text-lg xl:text-2xl tracking-tight text-secondary">{service.title}</h3>
                                <p className="font-heebo400 text-sm line-clamp-2 xl:line-clamp-3">{service.content}</p>
                                <button onClick={() => openModal(service)} className="font-heebo700 font-bold py-1 px-3 w-[120px] mx-auto border border-secondary text-secondary hover:bg-secondary hover:text-white hover:rounded transition-all">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Servises;
