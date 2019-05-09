import React, { Component } from 'react'
import {products,slides,filters} from "./json/body.json"
class App extends Component {
  constructor() {
    super();
    this.state = { 
      slides,
      products,
      filters
     };
  }

  render() {
    const slides=this.state.slides.map((slide, i)=>{
      return(
        <div className="slides">
            <a href={slide.href}>
            <img src={`images/${slide.imgName}.png`}/>
            </a>
        </div>
      )
    })
    const products=this.state.products.map((product, i)=>{
      return(
        <div className="cards" id={i}>
            <a href={product.href}>
            <img src={`images/${product.image}.jpg`}/>
            </a>
            <p>{product.title}</p>
            <p>{product.price.listPrice}</p>
            <p>{product.price.sellingPrice}</p>
        </div>
      )
    })
    const filters=this.state.filters.map((filter, i)=>{
      return(
        <div className="list" id={i}>
            <ul>
              <li>{filter.title}</li>
              <ul>{filter.values.map(value => <li>{value}</li>)}</ul>
            </ul>
        </div>
      )
    })
    return (
      <div className="App">
          <div className="grid-product">
          {slides}
          {products}
          {filters}
          </div>
      </div>
    );
  }
}

export default App;
//       const data = await res.json();
//       console.log(data)
//       const formatData = this.formatData(data);
//       console.log(formatData)
//       this.setState({data: formatData});
//   }
//   formatData(data){
//       return data.map((data, i)=>{
//             return{
//               "title":data.title
//             }
//       });
// }

//   render() {
//     return (
//       <div className="App">
//       <Navigations/>
//       <Categories/>
//       <Slider/>
//       <Products/>
//       <Footer/>
//       <div className="grid-product">
//           productos
//       </div>
// </div>
//     );
//   }
// }

// export default App;