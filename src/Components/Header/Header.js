import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/SVG/logo.svg'
import search from '../../assets/SVG/search.svg'
import cart from '../../assets/SVG/cartIcon.svg'
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img className='header-img' src={logo} />
            <nav className="nav">
                <p className='orga'>Organick</p>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/page">Pages</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/pro">Project</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/news">News</Link>
                    </li>
                </ul>

                <div className="search">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-btn">
                        <img className="search-img" src={search} alt="" />
                    </button>
                </div>

                <button className='cartbtn' >
                    <Link to='/cart'>
                        <img className='Cart' src={cart} alt="Cart" />
                    </Link>
                </button>
                <div>
                    <p className='parag'>Cart (0)</p>
                </div>
                <div id="cart" className="cart">
                    <ul id="cartItems" className="cart-items"></ul>
                </div>

            </nav>

        </header>

    )
}

export default Header