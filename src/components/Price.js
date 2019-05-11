import React from 'react';
const Price = props=>{ 
        console.log(props)
        console.log(props.price.listPrice)
        console.log(props.price.sellingPrice)
        const priceMark=props.price.listPrice==props.price.sellingPrice
        console.log(priceMark)
      if(priceMark===true) {
        return(
              <div className="price__line--line">
                  
                  $ SIN LINEA {props.price.listPrice}
              </div>
        )
    }
    else{
      return(
        <div className="price__line--outline">
        $ CON LINEA {props.price.listPrice}
        </div>
      )
    }

}
export default Price;