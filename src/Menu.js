import React from 'react';

function Menu(props) {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#/clothes"> ОДЕЖДА</a>
                </li>
                <li>
                    <a href="#/kids"> ДЕТЯМ</a>
                </li>
                <li>
                    <a href="#/books"> КНИГИ</a>
                </li>
                <li>
                    <a href="#/computers">  КОМПЬЮТЕРЫ</a>
                </li>
                <li>
                    <a href="#/contacts"> КОНТАКТЫ</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;