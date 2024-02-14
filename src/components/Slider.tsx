import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Help1 from '../assets/help.png';
import Help2 from '../assets/servise1.png';
import Help3 from '../assets/servise2.png';

const MyCarousel = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='max-w-[600px] w-full xl:-translate-x-10 xl:-translate-y-10 xl:relative xl:-z-10'>
            <Slider {...settings}>
                <div>
                    <img className='sm:h-[320px] md:h-[400px] w-full' src={Help1} alt="Slide 1" />
                </div>
                <div>
                    <img className='sm:h-[320px] md:h-[400px] w-full' src={Help2} alt="Slide 2" />
                </div>
                <div>
                    <img className='sm:h-[320px] md:h-[400px] w-full' src={Help3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default MyCarousel;
