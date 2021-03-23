import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand"><NavLink to="/" activeClassName="is-active" exact>ProShop</NavLink></div>
            <div className="navLinks">
                <ul>
                <li><NavLink to="/cart" activeClassName="is-active">Cart</NavLink></li>
                <li><NavLink to="/signin" activeClassName="is-active">Sign In</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
