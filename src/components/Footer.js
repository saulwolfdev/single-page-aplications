import React, { Component } from 'react'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <footer className="main-footer">
                    <ul className="footer__details">
                            <h4 className="footer__title">productos</h4>
                            <li className="footer__list">Compre junto</li>
                            <li className="footer__list">Kit look</li>
                            <li className="footer__list">Complet&aacute; tu compra</li>
                            <li className="footer__list">Shop the look</li>
                            <li className="footer__list">Sin stock</li>
                    </ul>
                    <ul className="footer__details">
                            <h4 className="footer__title">Mis pedidos</h4>
                            <li className="footer__list">Wishlist</li>
                            <li className="footer__list">Productos frecuentes</li>
                            <li className="footer__list">Mis listas</li>
                            <li className="footer__list">Mis recetas</li>
                    </ul>
                        <ul className="footer__details">
                            <h4 className="footer__title">Contactanos</h4>
                            <li className="footer__list">Nuestras sucursales</li>
                            <li className="footer__list">Horarios y tel&eacute;fonos</li>
                        </ul>
                        <ul className="footer__details--icons">
                            <li className="footer__list"><i className="icon-new-facebook"></i></li>
                            <li className="footer__list"><i className="icon-new-twitter"></i></li>
                            <li className="footer__list"><i className="icon-new-youtube"></i></li>
                        </ul>
            </footer>
        );
    }
}

export default Footer;