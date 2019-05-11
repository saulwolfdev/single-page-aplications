import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import React from 'react';
const Sliders = props=>{ 
    const slides=props.data.map((slide, i)=>{
      console.log(props)
        return(
          <div className="banner" key={i}>
              <a href={slide.href}>
              <img className="main-banner__banner" src={`images/${slide.imgName}`} alt={props.title}/>
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
