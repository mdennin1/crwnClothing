import React from 'react';
import './menuItem.scss';

//functions
const menuItem = ({imageUrl, size, title}) =>(
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                SHOP NOW 
            </span>
        </div>
    </div>
);
//export
export default menuItem;