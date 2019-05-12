import React from 'react';
const Filters = props=>{ 
    // console.log(props.data)     
    const filters=props.data.map((filter, i)=>{
        return(
            <ul className="filters" key={i}>
                <li className="filters__lists">
                    <h4 className="filters__title">{filter.title}</h4>
                </li>
                <li className="filters__lists">
                    <ul className="filters">
                        {filter.values.map((value, i)=>
                            <li clas="filters__lists" key={i}>
                                <input className="filters__input" type="checkbox"/>
                                <a>{value}</a>
                            </li>
                            )}
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