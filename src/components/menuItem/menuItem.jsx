import React from 'react';
import './menuItem.scss';
import { withRouter } from 'react-router-dom';

//functions
const menuItem = ({imageUrl, size, title, history, match, linkUrl}) =>(
    <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(menuItem);