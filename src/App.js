import React, { Component } from 'react';
import Sliders from './components/Sliders';
import Products from "./components/Products";
class App extends Component {
  state={
    slides:[],
    products:[],
    filters:[]
  }
  async componentWillMount(){
      const res = await fetch('http://remote.fizzmod.com/body.json')
      const data = await res.json();
        this.setState({
              slides:data.slides,
              products:data.products,
              filters:data.filters
        })
    }
  render() {
    return (
      <div className="App">
        <Sliders data={this.state.slides}/>
          <main className="main-grid">
            <Products data={this.state.products}/>
          </main>
      </div>
    );
  }
}

export default App;