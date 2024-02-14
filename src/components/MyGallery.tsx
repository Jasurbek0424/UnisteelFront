import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import NavImg1 from '../assets/navbar/Img1.png';
import NavImg2 from '../assets/navbar/Img2.png';
import NavImg3 from '../assets/navbar/Img3.png';
import NavImg4 from '../assets/navbar/Img4.png';
import NavImg5 from '../assets/navbar/Img4.png';



const images = [
    {
        original: NavImg1,
        thumbnail: NavImg1,
    },

    {
        original: NavImg2,
        thumbnail: NavImg2,
    },

    {
        original: NavImg3,
        thumbnail: NavImg3,
    },

    {
        original: NavImg4,
        thumbnail: NavImg4,
    },
    {
        original: NavImg5,
        thumbnail: NavImg5,
    },

];

const MyGallery = () => {
    return (
        <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={false}
            showNav={false}
            showIndex={false}
            lazyLoad={true}
            infinite={true}
            autoPlay={true}
            useBrowserFullscreen={true}
            renderItem={(item) => {
                return (
                    <div className="">
                        <img
                            className='h-[155px] mx-auto'
                            src={item.original}
                            alt={item.description}
                        />
                    </div>
                );
            }}
        />
    );
};

export default MyGallery;
