import React from 'react';
const Filters = props=>{ 
    console.log(props.data)     
    const filters=props.data.map((filter, i)=>{
        return(
            <ul className="filters" key={i}>
                <li className="filter__lists">
                    <h4 className="filter__title">{filter.title}</h4>
                </li>
                <li className="filter__lists">
                    <ul className="filters">
                        {filter.values.map(value =>
                        <li clas="filter__lists">
                           <input className="filter__input" type="checkbox"/>{value}
                       </li>)}
                    </ul>
                </li>
            </ul>
        )
      })
      return (
        <aside className="main-filters">
            {filters}
        </aside>
      )
}
export default Filters;