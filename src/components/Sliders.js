import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import React from 'react';
const Sliders = props=>{ 
    // console.log(props.data)     
    const slides=props.data.map((slide, i)=>{
        return(
          <div className="banner" key={i}>
              <a href={slide.href}>
              <img className="main-banner__banner" src={`images/${slide.imgName}`} alt={`image`}/>
              
              </a>          
          </div>
          
        )
      })
      return (
        <div className="main-banner">
            <Slider autoplay={5000}>
            {slides}
            </Slider>
        </div>
      )
}
export default Sliders;
