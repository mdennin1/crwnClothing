import React from 'react';
import './checkoutItem.scss';
import { addToCart, decreaseQuantity, removeFromCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
//
const CheckoutItem = ({item, decrease, increase, remove}) =>{
  const { name, imageUrl, price, quantity } = item;
  return(
    <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          <div className='arrow' onClick={()=>decrease(item)}>&#10094;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={()=>increase(item)}>&#10095;</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=>remove(item)}>&#10005;</div>
    </div>
  );
}
//
const mapDispatchToProps = dispatch =>({
  decrease: item => dispatch(decreaseQuantity(item)),
  increase: item => dispatch(addToCart(item)),
  remove: item => dispatch(removeFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);