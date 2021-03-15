import React, { useEffect } from 'react';
import './cartItem.scss';
//
const CartItem = ({item : {imageUrl, price, name, quantity}}) =>{
    useEffect(()=>{
        console.log(name, quantity, price);
    });
    return(
        <div className='cart-item'>
            <img src={imageUrl} alt='item'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
};
//
export default CartItem;