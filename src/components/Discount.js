import React from 'react';
const Discount = props=>{ 
      const discounts= ((props.listPrice-props.sellingPrice)/100)
      
      if(discounts<props.listPrice) {
        return(
              <div className="off">
                    {discounts}
              </div>
        ) 
    }else{
      return null
    }

}
export default Discount;