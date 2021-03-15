import React from 'react';
import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping_bag_icon.svg';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cart.actions';
import { getItemCount } from '../../redux/cart/cart.utils';

const CartIcon = ({toggleShowCart, itemCount}) =>{
    console.error(itemCount);
    //
    return (
        <div className='cart-icon' onClick={toggleShowCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
//
const mapStateToProps = state =>({ itemCount: getItemCount(state) });
const mapDispatchToProps = dispatch =>({
    toggleShowCart: () =>dispatch(toggleShowCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
