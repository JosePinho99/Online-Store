import React from "react"
import Logo from "./Images/logo.png"
import { Link } from "react-router-dom"

function Nav(props) {
    return (
        <div id="nav">
            <div className="flex-row">
                <img id="logo" src={Logo} alt="Logo"></img>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/Online-Shop">
                    <p id="logo-text">Tabela <span id="logo-highlight">Permanente</span></p>
                </Link>
                
            </div>
            <div id="main-nav">
                <div className="nav-items">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/Shop">Shop</Link>
                </div>
                <div onClick={props.toggleCart} className="nav-items">Cart <span className="material-icons">shopping_cart</span></div>
            </div>
        </div>
    )
}

export default Nav
