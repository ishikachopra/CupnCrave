import React from 'react';
import { NavLink } from 'react-router-dom';
import coffeeItems from './coffeelist';

function Coffee() {
    return (
        <>
            <h1 className="cursive"><span className="cursive" >~ </span>Coffee Menu <span className="cursive">~</span></h1>
            <section className="coffee" id="coffee">
                {coffeeItems.map((item, index) => (
                    <div className="CoffeeItems" key={index}>
                        <div className="pic">
                            <img src={item.imgSrc} alt={item.altText} />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className="price">
                            <h2>Rs.{item.price}</h2>
                        </div>
                        <NavLink
                            to="/add-to-cart-coffee"
                            state={{ item }}
                            className="add-to-cart"
                        >
                            Add Item
                        </NavLink>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Coffee;
