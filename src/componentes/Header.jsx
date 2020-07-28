import React from 'react'
import './Header.css'
import Logo from '../assets/logoEllen.png'



export default props => {
    return (
        <header className="header">
            <div>
                <div className="logo">
                    <a href="#/" className="logo">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>

                <div className="input">
                    <input type="text" placeholder="  O que você procura?" value="" />
                    <button type="button" className="searchButton"
                        onclick=""><i className="fa fa-search"></i>
                    </button>
                </div>

                <div className="cart">
                    <div className="user">
                        <i className="fa fa-user"></i>
                        <p className="login">Cadastre-se ou Entre</p>
                    </div>
                    <div className="ca">
                        <i className="fa fa-shopping-cart"></i>
                        <p className="carrinho">Carrinho</p>
                    </div>
                </div>
            </div>
        </header>

    )

}
