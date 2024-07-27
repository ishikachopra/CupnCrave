import React from 'react';
import { NavLink } from 'react-router-dom';

const cakes = [
    { name: 'Biscoff-Lotus CheeseCake', price: 800, img: '../cake_imgs/biscoff-lotus-cake.png' },
    { name: 'Black Forest', price: 300, img: '../cake_imgs/black-forest.png' },
    { name: 'Blueberry CheeseCake', price: 800, img: '../cake_imgs/blueberry-cheese.png' },
    { name: 'Brownie CheeseCake', price: 800, img: '../cake_imgs/brownie-cheese-cake.png' },
    { name: 'Chocolate Praline', price: 700, img: '../cake_imgs/chocolate-praline.png' },
    { name: 'Butterscotch', price: 500, img: '../cake_imgs/butterscotch.png' },
    { name: 'Rainbow Cake', price: 400, img: '../cake_imgs/rainbow.png' },
    { name: 'Chocolate Truffle', price: 700, img: '../cake_imgs/chocolare-truffle.png' },
    { name: 'Oreo Royal', price: 750, img: '../cake_imgs/oreo-royal.png' },
    { name: 'Strawberry Gateau', price: 600, img: '../cake_imgs/strawberry-gateau.png' },
    { name: 'Pineapple Delight', price: 300, img: '../cake_imgs/pineapple-delight.png' },
    { name: 'Fresh Fruit Cake', price: 350, img: '../cake_imgs/fresh-fruit.png' },
];

const CakeMenu = () => {
    return (
        <div>
            <h1 className="cursive"><span>~</span> Cake Menu <span>~</span></h1>
            <section className="Cakes" id="Cakes">
                <div className="cakemenu">
                    {cakes.map((cake, index) => (
                        <div className="half-capsule" key={index}>
                            <div className="cake-img">
                                <img src={cake.img} alt={cake.name} />
                            </div>
                            <div className="price">
                                <h3>{cake.name}</h3>
                                <h2> Rs. {cake.price}</h2>
                            </div>
                            <NavLink
                                to="/add-to-cart"
                                state={{ cake }}
                                className="add-to-cart"
                            >
                                Add Item
                            </NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CakeMenu;
