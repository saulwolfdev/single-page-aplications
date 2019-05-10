import React, { Component } from 'react';
import Sliders from './components/Sliders';
import Products from "./components/Products";
import Filters from './components/Filters';
import Categories from './components/Categories';
class App extends Component {
  state={
    categories:[],
    slides:[],
    products:[],
    filters:[]
  }

  async componentWillMount(){
      const respons = await fetch('http://remote.fizzmod.com/menu.json')
      const category = await respons.json();
      const res = await fetch('http://remote.fizzmod.com/body.json')
      const data = await res.json();
        this.setState({
              categories:category.menu.categories,
              slides:data.slides,
              products:data.products,
              filters:data.filters
        })
    }
  render() {
    return (
      <div className="App">
          <Categories category={this.state.categories}/>
          <Sliders data={this.state.slides}/>
          <Filters data={this.state.filters}/>
          <Products data={this.state.products}/>
      </div>
    );
  }
}

export default App;