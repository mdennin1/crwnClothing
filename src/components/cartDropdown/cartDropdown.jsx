import React, {useEffect} from 'react';
import './cartDropdown.scss';
import CustomBtn from '../../components/customBtn/customBtn';
import CartItem from '../../components/cartItem/cartItem';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleShowCart} from '../../redux/cart/cart.actions';
//selectors
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
//
const CartDropdown = ({items, history, dispatch}) => {
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          items.length ? items?.map(item =>(<CartItem key={item.Id} item={item} />)) : (<span className='empty-cart'>Your Cart is Empty</span>)
        }
      </div>
      <CustomBtn onClick={() => {
        history.push('/checkout');
        dispatch(toggleShowCart());
      }}>GO TO CHECKOUT</CustomBtn>
    </div>
  )}
  //
  const mapStateToProps = createStructuredSelector({ items: selectCartItems });
  export default withRouter(connect(mapStateToProps)(CartDropdown));