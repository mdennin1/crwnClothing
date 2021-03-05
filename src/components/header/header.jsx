import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from  '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
const navOptions = [ 'shop', 'contact', 'login'];
const Header = () =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {navOptions.map(nav=>{
                if(nav === 'login' && this.props.currentUser){
                    return(
                        <div className="option" onClick={()=>auth.signOut()}>
                            Sign Out
                        </div>
                    )
                }
                return(
                    <Link key={nav} className="option" to={`/${nav}`}>
                        {nav.toUpperCase()}
                    </Link>
                )
            })
            }
        </div>
    </div>
);
//
export default Header;