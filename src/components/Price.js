import React from 'react';
const Price = props=>{ 
        // console.log(props)
        const priceMark=props.price.listPrice===props.price.sellingPrice
        
      if(priceMark===true) {
        return(
              <div className="card__price__line--line">
                  $ {props.price.listPrice}
              </div>
        )
    }
    else{
      return(
        <div className="card__price__line--outline">
        $ {props.price.listPrice}
        </div>
      )
    }
}
export default Price;