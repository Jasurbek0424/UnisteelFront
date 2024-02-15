import React, { useState, useEffect } from 'react';
import ModalComponent from "../Modal";
import FormComponent from "../Form";

interface Product {
    id: number;
    title: string;
    gost: string;
    category: string;
    country: string;
    size: string;
    content: string;
    get_photo: string;
}

interface Props {
    products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeProductId, setActiveProductId] = useState<number | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (products.length > 0) {
            setSelectedProduct(products[0]);
            setActiveProductId(products[0].id);
        }
    }, [products]);

    const handleClick = (product: Product) => {
        setSelectedProduct(product);
        setActiveProductId(product.id);
    };

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
        <div>
            <div className='mb-5 flex flex-wrap'>
                {Array.isArray(products) && products.map(product => (
    <button
        key={product.id}
        onClick={() => handleClick(product)}
        className={`text-lg md:text-xl md:py-2 px-4 border font-libre400 font-semibold border-black
            ${activeProductId === product.id ? 'bg-primary text-white' : 'bg-transparent'}`}
    >
        {product.title}
    </button>
))}
            </div>
            {selectedProduct && (
                <div className='flex gap-6 lg:flex-row lg:items-start  flex-col items-center'>
                    <div>
                        <img
                            src={selectedProduct.get_photo}
                            alt={selectedProduct.title}
                            className='max-w-[350px] lg:max-w-[400px] w-full'
                        />
                    </div>
                    <div className='flex flex-col gap-4 max-w-[700px] w-full'>
                        <h3 className='font-libre700 font-bold text-xl md:text-2xl text-primary'>
                            {selectedProduct.title}({selectedProduct.gost})
                        </h3>
                        <table>
                            <tbody>
                                {selectedProduct.category && <tr className='md:text-md text-sm'>
                                    <td className='border border-gray-300 w-1/2 py-2 px-4 bg-gray-200'>Категория:</td>
                                    <td className='border border-gray-300 w-1/2 py-2 px-4 bg-gray-200'>{selectedProduct.category}</td>
                                </tr>}
                                {selectedProduct.country && <tr className='md:text-md text-sm'>
                                    <td className='border w-1/2 py-2 px-4'>Страна происхождения:</td>
                                    <td className='border w-1/2 py-2 px-4'>{selectedProduct.country}</td>
                                </tr>}
                                {selectedProduct.size && <tr className='md:text-md text-sm'>
                                    <td className='border border-gray-300 bg-gray-200  w-1/2 py-2 px-4'>Размер:</td>
                                    <td className='border border-gray-300 bg-gray-200  w-1/2 py-2 px-4'>{selectedProduct.size}</td>
                                </tr>}
                            </tbody>
                        </table>
                        <div>
                            {selectedProduct.content.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-sm text-justify">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <a
                                href="tel:+77007192085"
                                className='text-white text-center w-[120px] sm:w-[150px] lg:w-[180px] py-2 bg-gray-800 text-xs sm:text-md lg:text-lg font-heebo700 font-bold hover:bg-gray-900'
                            >Позвонить</a>
                            <button
                                onClick={openModal}
                                className='text-white w-[120px] sm:w-[150px] lg:w-[180px] py-2 bg-primary text-xs sm:text-md lg:text-lg font-heebo700 font-bold hover:bg-blue-700'>
                                Оставить заявку
                            </button>

                        </div>
                        <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal}>
                            <button onClick={closeModal} className='w-full flex justify-end mb-4 tracking-widest font-libre700 font-bold text-xl text-secondary'>X</button>
                            <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Оставить заявку</h2>
                            <FormComponent onSubmitSuccess={handleFormSubmitSuccess} />
                        </ModalComponent>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Products;
