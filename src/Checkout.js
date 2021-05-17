import React from 'react';
import cart from "./assets/cart.svg"

function Chekout(props) {
    return (
            <div className="checkout">
                <a href="#">
                    <img src={cart}/>
                    <span className="counter">0</span>
                </a>
            </div>
    );
}

export default Chekout;