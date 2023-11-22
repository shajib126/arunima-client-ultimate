'use client'
import React, { useEffect } from "react";

const images = [
    "https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1480&t=st=1694685443~exp=1694686043~hmac=b2c7a31b3733ec9b2b2374a60c79db19fbbeb39c61a37f0e733ce0a621a5959f",
    "https://img.freepik.com/free-photo/purchasing-shop-buying-selling-teade_53876-134043.jpg?w=1380&t=st=1694685462~exp=1694686062~hmac=89683a3b0321823e83b327fa830644d3b081962f818212ec406d8e0fb07122cd",
    "https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=1380&t=st=1694685478~exp=1694686078~hmac=1a439b17f60c8b08b54df60093a9926c0b38af44527bbcf77883259fcade7217",
    "https://img.freepik.com/premium-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-119093.jpg?w=1380"
    ]

const Carousel = () => {
    console.log(images);
  return (
    <div className="carousel w-full">
        {
            images.map((image,i)=>(
                <div key={i} id={`slide${i}`} className="carousel-item relative w-full">
                <img
                  src={image}
                  className="w-full h-[400px] lg:h-[600px] "
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${i-1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${i+1}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            ))
        }
     
    
    
      
    </div>
  );
};

export default Carousel;
