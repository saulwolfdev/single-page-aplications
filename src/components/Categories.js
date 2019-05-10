import React from 'react';
const Categories = props=>{ 
    console.log(props.category)
    const categories=props.category.map((category,i)=>{
      return(
        <div className="main__category" key={i}>
              <a href={category.href}>
                  {category.title}
              </a>
          </div>
      )
    })    
      return (
        <div className="main-categories">
           {categories}
        </div>
      )
}
export default Categories;