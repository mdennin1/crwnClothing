import React from 'react';
import './menuItem.css';

//functions
const menuItem = ({imageUrl, title}) =>(
    <div className="menuItem" style={{
        backgroundImage: `url(${imageUrl})`
    }}>
        <div className="content">
            <h1 className="title">
                {title}
            </h1>
            <span className="subtitle">
                SHOP NOW 
            </span>
        </div>
    </div>
);
//export
export default menuItem;