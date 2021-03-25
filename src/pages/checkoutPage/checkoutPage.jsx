import React from 'react';
import './checkoutPage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
//selectors
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

//components
import CheckoutItem from '../../components/checkoutItem/checkoutItem';
import StripeBtn from '../../components/stripeBtn/stripeBtn';


const CheckoutPage = ({items, total, dispatch}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                items.length ? items.map(item=>(<CheckoutItem key={item.Id} item={item} />)) : (<span>Your Cart is Empty</span>)
            }
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card info for payments
                <br/>
                card#: 4242 4242 4242 4242 exp: 01/25 cvv: 123
            </div>
            <StripeBtn className='btn' price={total} />
        </div>
    )
}
//
const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
