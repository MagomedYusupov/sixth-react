import React from 'react';
import Card from "./Card";

function Content(props) {


    return (
        <div className="content">
            {props.dataBase.map((product)=>{
                return(
                    <Card  product={product} dataBase={props.dataBase} setBought={props.setBought} />
                )
            })
            }
        </div>
    );
}

export default Content;