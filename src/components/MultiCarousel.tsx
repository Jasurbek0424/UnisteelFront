import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Client1 from '../assets/customers/client1.png';
import Client2 from '../assets/customers/client2.png';
import Client3 from '../assets/customers/client3.png';
import Client4 from '../assets/customers/client4.png';


const MultiCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className="mx-auto max-w-[400px] sm:max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 multiCarousel">
            <Slider {...settings}>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client1} alt="Slide 1" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client2} alt="Slide 2" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client3} alt="Slide 3" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client4} alt="Slide 4" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client1} alt="Slide 5" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client2} alt="Slide 6" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client3} alt="Slide 6" />
                </div>
                <div className=''>
                    <img className='mx-auto w-[145px] sm:w-[175px] lg:w-[200px]' src={Client4} alt="Slide 6" />
                </div>
            </Slider>
        </div>
    );
};

export default MultiCarousel;
