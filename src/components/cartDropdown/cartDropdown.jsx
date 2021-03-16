import React, {useEffect} from 'react';
import CustomBtn from '../../components/customBtn/customBtn';
import CartItem from '../../components/cartItem/cartItem';
import { connect } from 'react-redux';
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
  const mapStateToProps = state => ({ items: selectCartItems(state) });
  export default connect(mapStateToProps)(CartDropdown);