import React, { Component } from 'react';
import Sliders from './components/Sliders';
import Products from "./components/Products";
import Filters from './components/Filters';
import Categories from './components/Categories';
import Navigations from "./components/Navigations";
import Footer from "./components/Footer";
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
          <Navigations/>
          <Categories category={this.state.categories}/>
          <Sliders data={this.state.slides}/>
          <Filters data={this.state.filters}/>
          <Products data={this.state.products}/>
          <Footer/>
      </div>
    );
  }
}

export default App;