import React from 'react';
import './menuItem.scss';

//functions
const menuItem = ({imageUrl, size, title}) =>(
    <div className={`${size} menu-item`} style={{
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