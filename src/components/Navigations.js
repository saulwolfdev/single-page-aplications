import React, { Component } from 'react'
class Navigations extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <header className="l-container main-header">
                <div className="main-header__block">
                   <div className="main-logo">
                   <img className="logo" src="images/logo_fizzmod.svg" alt="logo"/>
                   </div>
                    <form className="main-form">
                        <i className="icon-icn_search"></i>
                        <input type="text" className="main-form--input" name="name" placeholder="Buscar un producto"/>
                        <button className="main-form--button"><i className="icon-icn_cart"></i>mi carrito</button>
                    </form>
                    <nav className="main-nav">
                          <ul className="main-menu">
                              <li className="main-menu__item"><a className="main-menu__link" href="#">ayuda</a></li>
                              <li className="main-menu__item"><a className="main-menu__link" href="#">mis pedidos</a></li>
                              <li className="main-menu__item"><a className="main-menu__link" href="#">mi cuenta</a></li>
                          </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigations;