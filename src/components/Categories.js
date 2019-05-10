import React from 'react';
const Categories = props=>{ 
    console.log(props.data)     
    const slides=props.data.map((slide, i)=>{
        return(
          <div className="banner" key={i}>
              <a href={slide.href}>
              <img className="main-banner__banner" src={`images/${slide.imgName}`}/>
              </a>
          </div>
        )
      })
      return (
        <div className="main-banner">
            {slides}
        </div>
      )
}
export default Categories;