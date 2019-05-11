import React from 'react';
const Discount = props=>{ 
      const discounts= ((props.listPrice-props.sellingPrice)/100)
      if(discounts===0) {
        return(
              <div className="width-out-off">SIN DESCUENTO</div>
        ) 
    }
    return(<div className="width-off">CON DESCUENTO -{discounts} %</div>) 
}
export default Discount;
