import React from 'react'
import Carousel, { arrowsPlugin } from "@brainhubeu/react-carousel"
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import "./Carousel.css";

const MyCarousel = () => {
    <Carousel plugins={['arrows']}></Carousel>
    return (
        <div className="carousel-container"> 
               <div className="carousel-title">
                    <h2>Servicios</h2>
                </div>


            <Carousel 
             plugins={['arrows','infinite','centered']}
             slidesPerPage={3}
             animationSpeed={200}
             offset={50}
             itemWidth={400}
             slides={Slides}
             breakpoints={{
                 960:{
                     slidesPerPage: 1,
                     arrows: false,
                     itemWidth:250,
                 },
             }}

            />

        </div>
    )
}

export default MyCarousel
