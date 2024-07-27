import React from 'react';
import { NavLink } from 'react-router-dom';
import cookies from './cookielist';

function Cookie() {
    return (
        <>
            <h1 className="cursive"><span className="cursive">~ </span>Cookie Menu <span className="cursive">~</span></h1>
            <section className="Cakes" id="Cakes">
                <div className="cakemenu">
                    {cookies.map(cookie => (
                        <div className="half-capsule" key={cookie.id}>
                            <div className="cookie-img">
                                <img src={cookie.img} alt={cookie.name} />
                            </div>
                            
                            <div className="price">
                                <h3>{cookie.name}</h3>
                                <h2>Rs. {cookie.price.toFixed(2)}</h2>
                            </div>
                            <NavLink
                                to="/add-to-cart"
                                state={{ cookie }}
                                className="add-to-cart"
                            >
                                Add Item
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Cookie;
