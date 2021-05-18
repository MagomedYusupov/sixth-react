import React from 'react';
import cart from "./assets/cart.svg"

function Chekout(props) {
    const Buy = props.dataBase.filter((item)=>{
        return item.bought === true;

    })

    return (

            <div className="checkout">

                    <img src={cart} alt=""/>
                    <span className="counter">{Buy.length}</span>

            </div>
    );
}

export default Chekout;