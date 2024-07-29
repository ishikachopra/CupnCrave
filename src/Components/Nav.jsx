import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    const closeSearch = () => {
        if (isSearchOpen)
            setIsSearchOpen(false);
    };
    const handleSearchKeyPress = (e) => {
        if (e.key === "Enter") {
            closeSearch();
        }
    };
    // Step 1: Retrieve the array from localStorage
    const storedArray = localStorage.getItem("cartItems");

    // Step 2: Parse the JSON string to convert it back into an array
    const array = JSON.parse(storedArray);

    // Step 3: Check if array is not null before accessing length
    const arrayLength = array ? array.length : 0;

    return (<>
        <nav>
            <div className="dropdown-icon">
                <span className="menu-toggle " onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </span>
            </div>
            
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                    <div className="subdropdown">

                    <div className="uppermenu">
                        <h1>Main Menu</h1><NavLink to="/" onClick={closeMenu}><i className="fa-solid fa-house"></i> HOME</NavLink>
                        <NavLink to="/Menu" onClick={closeMenu}><i className="fa-solid fa-utensils"></i> MENU</NavLink>
                        <NavLink to="/cart" onClick={closeMenu}><i className="fa-solid fa-bag-shopping"></i> YOUR ORDERS</NavLink>
                        <NavLink to="/About" onClick={closeMenu}><i className="fa-solid fa-address-card"></i> ABOUT US</NavLink>
                        <NavLink to="/Contact" onClick={closeMenu}><i className="fa-solid fa-address-book"></i> CONTACT US</NavLink>
                        <NavLink to="/" onClick={closeMenu}><i className="fa-solid fa-gear"></i> SETTINGS</NavLink></div>
                    <div className="lowermenu"><NavLink to="/loginpage" className="login-btn" onClick={closeMenu}>LOGIN</NavLink>
                        <NavLink to="/loginpage" className="login-btn" onClick={closeMenu}>SIGNUP</NavLink>
                        <NavLink to="/loginpage" className="login-btn" onClick={closeMenu}>LOGOUT</NavLink></div>
                    
                    </div>
                
            </div>
            <div className="logo">
                <img
                    src={`${process.env.PUBLIC_URL}/images/final_navlogo.png`}
                    alt="Cafe Logo"
                />
            </div>

            <div className="center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Menu">Menu</NavLink>
                <NavLink to="/About">About Us</NavLink>
                <NavLink to="/Contact">Contact Us</NavLink>
            </div>

            <div className="right">
                <span className="search" onClick={toggleSearch}><i className="fa-solid fa-magnifying-glass"></i></span>
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i> <sup>{arrayLength}</sup></NavLink>
                <NavLink to="/loginpage" className="profile"><i className="fa-solid fa-user"></i></NavLink>
            </div>

        </nav>
        {isOpen && <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}></div>}
        {isSearchOpen && (
            <div className="search-box">
                <input type="text" placeholder="Search..." onKeyPress={handleSearchKeyPress} />
            </div>
        )}
    </>
    );
}

export default Nav;
