import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";

function Header(props) {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout dataBase={props.dataBase}/>
            <a href="#/logout" className="logout">выход</a>
        </div>
    );
}

export default Header;


