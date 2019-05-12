import React from 'react';
const Categories = props=>{ 
    const categories=props.category.map((category,i)=>{
      return(
        <li className="main--category" key={i}>
              <a href={category.href}>
                  {category.title}
              </a>
          </li>
      )
    })    
      return (
        <ul className="main-categories l-container">
           {categories}
        </ul>
      )
}
export default Categories;