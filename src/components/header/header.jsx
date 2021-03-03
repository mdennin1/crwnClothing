import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from  '../../assets/crown.svg';
const navOptions = [ 'shop', 'contact', 'login'];
const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {navOptions.map(nav=>(
                <Link key={nav} className="option" to={`/${nav}`}>
                    {nav.toUpperCase()}
                </Link>
            ))}
        </div>
    </div>
);
//
export default Header;