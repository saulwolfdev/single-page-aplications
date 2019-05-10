import React, { Component } from 'react';
import Sliders from './components/Sliders';
// import {products,slides,filters} from "./json/body.json";
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { 
  //     slides,
  //     products,
  //     filters
  //    };
  // }
  state={
    slides:[],
    products:[],
    filters:[]
  }

  async componentWillMount(){
      const res = await fetch('http://remote.fizzmod.com/body.json')
      const data = await res.json();
      // console.log(data)
        this.setState({
              slides:data.slides,
              products:data.products,
              filters:data.filters
        })
        // console.log(data)
    }
  render() {
    // console.log(this.state.slides)
    // console.log(this.state.products)
    // console.log(this.state.filters)
    const slides=this.state.slides.map((slide, i)=>{
      return(
        <div className="slides">
            <a href={slide.href}>
            <img src={`images/${slide.imgName}.png`}/>
            </a>
        </div>
      )
    })
    // const products=this.state.products.map((product, i)=>{
    //   return(
    //     <div className="cards" id={i}>
    //         <a href={product.href}>
    //         <img src={`images/${product.image}.jpg`}/>
    //         </a>
    //         <p>{product.title}</p>
    //         <p>{product.price.listPrice}</p>
    //         <p>{product.price.sellingPrice}</p>
    //     </div>
    //   )
    // })
    // const filters=this.state.filters.map((filter, i)=>{
    //   return(
    //     <div className="list" id={i}>
    //         <ul>
    //           <li>{filter.title}</li>
    //           <ul>{filter.values.map(value => <li>{value}</li>)}</ul>
    //         </ul>
    //     </div>
    //   )
    // })
    return (
      <div className="App">
          <div className="grid-product">
          <h1>PRODUCTOS</h1>
          {/* {slides}
          {products}
          {filters} */}
          <Sliders data={this.state.slides}/>
          </div>
      </div>
    );
  }
}

export default App;