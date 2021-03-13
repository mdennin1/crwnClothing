import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from  '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../../components/cartIcon/cartIcon';
import CartDropdown from '../../components/cartDropdown/cartDropdown';
//
const navOptions = [ 'shop', 'contact', 'login'];
const Header = ({currentUser, showCart}) =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {navOptions.map(nav=>{
                if(nav === 'login' && currentUser){
                    return(
                        <div key={nav} className="option" onClick={()=>auth.signOut()}>
                            SIGN OUT
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
            {currentUser ? <CartIcon /> : null}
        </div>
        {showCart ? <CartDropdown /> : null}
    </div>
);
//
const mapStateToProps = ({user: {currentUser}, cart: { showCart }}) =>({
    currentUser, showCart
});
export default connect(mapStateToProps)(Header);