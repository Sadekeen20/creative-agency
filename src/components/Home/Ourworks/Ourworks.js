import React from 'react';
import Carousel, { autoplayPlugin,slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image1 from '../../../images/carousel-1.png'
import image2 from '../../../images/carousel-2.png'
import image3 from '../../../images/carousel-3.png'
import image4 from '../../../images/carousel-4.png'
import image5 from '../../../images/carousel-5.png'
import { Container } from 'react-bootstrap';
import './Ourworks.css'
const Ourworks = () => {

    return (
        <div className="banner">
            <h2>Here are some of <span className="text-success">our works</span></h2>
            <Container className="banner">
            <Carousel className="our-works"
                plugins={[
                    'infinite',
                    'arrows',
                   {
                     resolve: autoplayPlugin,slidesToShowPlugin,
                     options: {
                       interval: 2000,
                       numberOfSlides: 2
                     }
                   },
                 ]}   
                 animationSpeed={1000}
                >
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                <img src={image5} />

            </Carousel>
        </Container>
        </div>
    );
};

export default Ourworks;