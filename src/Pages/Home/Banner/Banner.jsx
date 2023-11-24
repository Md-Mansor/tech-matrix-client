import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/all.jpg'
import img2 from '../../../assets/pc.jpeg'
import img3 from '../../../assets/laptop.jpg'
import img4 from '../../../assets/watch.jpg'
import img5 from '../../../assets/phone.jpg'

const Banner = () => {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>
                <div>
                    <img src={img4} />

                </div>
                <div>
                    <img src={img5} />

                </div>
            </Carousel>

        </div>
    );
};

export default Banner;