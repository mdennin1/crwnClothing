import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from  '../../assets/crown.svg';
const navOptions = [ 'shop', 'contact']
const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {navOptions.map(nav=>(
                <Link className="option" to={`/${nav}`}>
                    {nav}
                </Link>
            ))}
        </div>
    </div>
);
//
export default Header;