import React from 'react';
const Categories = props=>{ 
    const categories=props.category.map((category,i)=>{
      return(
        <li className="main__category" key={i}>
              <a href={category.href}>
                  {category.title}
              </a>
          </li>
      )
    })    
      return (
        <ul className="l-container main-categories">
           {categories}
        </ul>
      )
}
export default Categories;