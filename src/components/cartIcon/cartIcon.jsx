import React from 'react';
import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping_bag_icon.svg';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cart.actions';

const CartIcon = ({toggleShowCart}) =>{
    return (
        <div className='cart-icon' onClick={toggleShowCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}
//
const mapDispatchToProps = dispatch =>({
    toggleShowCart: () =>dispatch(toggleShowCart()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
