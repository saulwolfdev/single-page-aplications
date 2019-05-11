import React from 'react';
const Price = props=>{ 
        // console.log(props)
        const priceMark=props.price.listPrice===props.price.sellingPrice
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