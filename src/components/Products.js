import React from 'react';
import Discount from './Discount';
import Price from "./Price"
const Products = props=>{
    // console.log(props)
    const products=props.data.map((product, i)=>{
        return(
            <div className="card" key={i}>
                    <div className="card__img">
                        <a href={product.href}>
                            <img src={`images/${product.image}`} alt={product.title}/>
                        </a>
                    </div>
                    <div className="card__off">
                            <Discount
                            listPrice={product.price.listPrice} 
                            sellingPrice={product.price.sellingPrice}
                            />
                    </div>
                    <div className="card__content">
                        <h3 className="card__title">
                           {product.title}
                        </h3>
                        <div className="card__price__line">
                             <Price price={product.price}/>
                        </div>
                        <div className="card__footer ">
                            <div className="card__footer-text">
                            $ {product.price.sellingPrice}
                            </div>
                        </div>
                    </div>
                </div>
        )
      })
      return (
            <main className="cards-grid">
                {products}
            </main>
      )
}
export default Products;


