import React, { useEffect, useState } from 'react';
import { Features } from '../../data/data';
import { fetchProducts, Product } from '../../api/api';
import AboutImg from '../../assets/about.png';
import Products from '../Products/Products';
import CounterSection from '../CounterSection';
import MyCarousel from '../Slider';
import Servises from '../Servises';
import Partner from '../Partner';
import MultiCarousel from '../MultiCarousel';
import Help from '../Help';
import ScrollToTop from '../ScrollToTop';
import Whatsapp from '../Whatsapp';




const GlobalMain: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            <ScrollToTop />
            <Whatsapp />
            <section className='container flex md:flex-row flex-col gap-6 py-10 items-center px-4'>
                <div>
                    <h2 className='text-secondary font-libre700 font-bold text-2xl lg:text-4xl -space-x-0.5 mb-4'>
                        Мы реализуем продукцию
                        заводов
                    </h2>
                    <p className='text-gray-700 text-sm md:text-md sm:text-start text-justify'>
                        Компания Unisteel готова предоставить своим клиентам высококачественную
                        продукцию, произведенную на современных заводах с использованием
                        передовых технологий и соответствующих стандартам качества. Кроме того,
                        наша компания имеет опытных специалистов, которые могут помочь подобрать
                        наиболее подходящую металлическую продукцию для ваших нужд и оказать
                        услуги по доставке и установке.
                    </p>
                </div>
                <div className='flex flex-wrap items-center justify-center md:w-1/2 flex-shrink-0 gap-2 mt-5 '>
                    {Features.map(feature => (
                        <img
                            key={feature.id}
                            src={feature.img}
                            alt={`Feature ${feature.id}`}
                            className='w-[130px] sm:w-[150px]'
                        />
                    ))}
                </div>
            </section>
            <section id='about' className='bg-secondary py-10 scroll-smooth'>
                <div className='container flex lg:flex-nowrap flex-wrap gap-6 text-white px-4'>
                    <div className='flex flex-col gap-4'>
                        <h3 className=''>
                            О нашей компании
                        </h3>
                        <h2 className='font-libre800 font-extrabold text-2xl sm:text-3xl lg:text-4xl -space-x-0.5 mb-4'>
                            О КОМПАНИИ <br />
                            UNISTEEL
                        </h2>
                        <p className='text-sm md:text-md'>
                            Компания ТОО «ЮНИСТИЛ» была основана 22 ноября 2011 года.
                            Опираясь на богатый опыт, мы тщательно следим за высоким
                            качеством нашего сервиса, расширяем наш сортаментный ряд,
                            пополняя его новыми товарами и готовы предложить Вам как
                            популярную продукцию, так и редкие наименования.
                            <br />
                            <br />
                            Миссия компании — реализация широкого спектра
                            металлопродукции и сопутствующих товаров, применяемых в
                            промышленном и гражданском строительстве, жилищно-
                            коммунальной сфере, нефтяной и газовой промышленности,
                            изготовлении и монтаже металлоконструкций и оказании
                            соответствующих услуг.
                        </p>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={AboutImg} alt="" className=' max-w-[550px] w-full lg:flex-shrink-0' />
                    </div>
                </div>
            </section>
            <section id='products' className='bg-gray-100 py-10 mb-10 scroll-smooth'>
                <div className='container px-4'>
                    <div className='flex gap-2 items-center '>
                        <h2 className='flex-shrink-0'>
                            Наши товары
                        </h2>
                        <div className='w-full h-0.5 bg-gray-200'></div>
                    </div>
                    <h2 className='text-secondary font-libre700 font-bold text-2xl sm:text-3xl lg:text-4xl -space-x-0.5 mb-5'>
                        Продукция
                    </h2>
                    <Products products={products} />
                </div>
            </section>
            <section className='bg-map bg-center bg-cover bg-no-repeat h-screen mb-10'>
                <div className='container flex justify-center items-center flex-col h-full'>
                    <h2 className='text-secondary font-libre700 font-bold text-3xl 
                    lg:text-5xl -space-x-0.5 mb-8 max-w-[900px] 
                    text-center'>
                        Главные причины почему выбирают нас!
                    </h2>
                    <CounterSection />
                </div>
            </section>
            <section className='container py-4 flex justify-center items-start md:mb-10 flex-wrap xl:flex-nowrap'>
                <div className='px-5 py-8 bg-secondary flex flex-col gap-5 text-white
                xl:max-w-[500px] w-full'>
                    <h2 className='font-libre800 font-extrabold text-justify text-xl sm:text-2xl lg:text-4xl -space-x-0.5'>
                        Позвольте нам помочь
                        с выбором
                        металлопроката для
                        ваших проектов
                    </h2>
                    <h3 className='font-libre400 text-md lg:text-xl'>
                        Мы понимаем, что выбор металлопроката под ваши
                        задачи может быть сложным.
                    </h3>
                    <p className='text-sm md:text-md text-justify'>
                        Но не волнуйтесь — компания Unisteel готова помочь вам сделать
                        правильный выбор. Наши опытные специалисты помогут вам выбрать
                        оптимальное решение, учитывая ваши потребности и бюджет. Мы
                        предлагаем широкий выбор металлопроката и металлоконструкций
                        высокого качества, которые соответствуют всем стандартам
                        безопасности. Обратитесь к нам, и мы сделаем все возможное, чтобы
                        помочь вам реализовать ваши проекты!
                    </p>
                </div>
                <MyCarousel />
            </section>
            <section className='container text-center py-6 px-4 mb-5'>
                <div className='max-w-[750px] w-full mx-auto text-secondary'>
                    <h2 className='font-libre800 font-extrabold text-xl sm:text-2xl lg:text-4xl -space-x-0.5 mb-5'>
                        Создайте надежный каркас для
                        своих проектов с металлопрокатом
                        от Unisteel
                    </h2>
                    <p className='text-md md:text-lg'>
                        Мы предлагаем широкий выбор металлоконструкций и профилей, которые можно
                        использовать для создания каркасов зданий, сооружений и других объектов. Наш
                        металлопрокат отличается высокой прочностью и долговечностью, что гарантирует
                        надежность и безопасность ваших проектов.
                    </p>
                </div>
            </section>
            <section id='servises' className='bg-servise bg-cover bg-no-repeat bg-center lg:py-10 scroll-smooth'>
                <div className='container py-8'>
                    <Servises />
                </div>
            </section>
            <section className='bg-partner bg-cover bg-no-repeat bg-center py-10 lg:py-20 relative after:content-[""]
            after:absolute w-full h-full bg-black'>
                <div className='container'>
                    <Partner />
                </div>
            </section>
            <section className='container py-8'>
                <h2 className="text-secondary text-center font-libre800 font-extrabold text-xl sm:text-2xl lg:text-4xl
                mb-5 -space-x-0.5">
                    Наши клиенты
                </h2>
                <MultiCarousel />
            </section>
            <section className='py-6 bg-gray-100'>
                <div className='container'>
                    <Help />
                </div>
            </section>
        </main>
    );
};

export default GlobalMain;
