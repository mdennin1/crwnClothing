import React from 'react';
import './collectionItem.scss';
import CustomBtn from '../../components/customBtn/customBtn';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.actions';

//
const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  //
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomBtn className='custom-button' inverted onClick={()=>addToCart(item)}>Add Item</CustomBtn>
    </div>
  );
};
//
const mapDispatchToProps = dispatch =>({
  addToCart: newItem => dispatch(addToCart(newItem)),
})
export default connect(null, mapDispatchToProps)(CollectionItem);