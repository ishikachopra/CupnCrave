import React from "react";
import { NavLink } from "react-router-dom";

function Discount(){
    return (
        <>
            <div className="discount" >
                <div className="imgbg">
                    <div className="distext">
                        <div className="disicon"> <img src="../images/cup.png" alt=""></img></div>
                        <div className="dish3">Enjoy 20% off on all drinks</div>
                        <h1 className="dish1">Every Thrusday , 4pm-7pm</h1>
                        <NavLink to="/Menu">Order Now</NavLink>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Discount;