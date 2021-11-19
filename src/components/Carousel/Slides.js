import React from "react";
import "./Carousel.css";
const slidesInfo = [
    {
     
      src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
      alt:"foto1",
      desc: "foto1",

    },

    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: " foto 2",
        desc: " foto 2",
    },

    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt: "foto 3",
        desc: "foto 3",

    },
]


const slides = slidesInfo.map( slide => (
   <div className="slide-container">
       <img src={slide.src} alt={slide.alt}/>
       <div className="slide-desc">
           <span>{slide.desc}</span>
       </div>

   </div>
));


export default slides;