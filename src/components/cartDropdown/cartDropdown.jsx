import React, {useEffect} from 'react';
import './cartDropdown.scss';
import CustomBtn from '../../components/customBtn/customBtn';
import CartItem from '../../components/cartItem/cartItem';
import { connect } from 'react-redux';
//selectors
import {createStructuredSelector} from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
//
const CartDropdown = ({items}) => {
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          items?.map(item =>(<CartItem key={item.Id} item={item} />))
        }
      </div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
  )}
  //
  const mapStateToProps = createStructuredSelector({ items: selectCartItems });
  export default connect(mapStateToProps)(CartDropdown);