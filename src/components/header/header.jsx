import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from  '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import CartIcon from '../../components/cartIcon/cartIcon';
//
const navOptions = [ 'shop', 'contact', 'login'];
const Header = (props) =>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            {navOptions.map(nav=>{
                if(nav === 'login' && props.currentUser){
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
            <CartIcon />
        </div>
    </div>
);
//
const mapStateToProps = state =>({
    currentUser: state.user.currentUser,
})
export default connect(mapStateToProps)(Header);