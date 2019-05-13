import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import React from 'react';
const Sliders = props=>{ 
    const slides=props.data.map((slide, i)=>{
        return(
          <div className="banner" key={i}>
              <a href={slide.href}>
              <img className="banner__slider" src={`images/${slide.imgName}`} alt={props.title}/>
              </a>          
          </div>
          
        )
      })
      return (
        <div className="l-container main-banner">
            <Slider autoplay={5000}>
                      {slides}
            </Slider>
        </div>
      )
}
export default Sliders;

