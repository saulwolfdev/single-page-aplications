import React from 'react';
const Discount = props=>{
    // console.log(props) 
      // const discounts= ((props.listPrice-props.sellingPrice)/100)
      const discounts= ((props.listPrice-props.sellingPrice)/props.listPrice)
      const discountsFinal= Math.round(discounts*100)
      if(discountsFinal===0) {
        return(
              <div className="width-out-off"></div>
        ) 
    }
    return(<div className="card__off--width-off">-{discountsFinal}%</div>) 
}
export default Discount;
