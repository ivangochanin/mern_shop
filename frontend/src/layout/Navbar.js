import React from 'react'
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { CgUser } from "react-icons/cg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbarWrapper">
                    <div className="brand"><NavLink to="/" activeClassName="is-active" exact><span className="dot"></span><span className="text">Shop</span></NavLink></div>
                    <div className="navLinks">
                        <ul>
                        <li><NavLink to="/cart" activeClassName="is-active"><CgShoppingCart className="linkIcons" size={24}/><span>Cart</span></NavLink></li>
                        <li><NavLink to="/login" activeClassName="is-active"><CgUser className="linkIcons" size={24}/><span>Log In</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
