import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = ({price}) =>{
    const priceParam = price * 100;
    const stripeKey = 'pk_test_51IYrw1A92l2pYhj202M112G0v80t5jzocrnKvVI5ZAxAos66h9JQW01iUC9RNFj5yzMT86hLnzpi9B6R9SldpCkx003S5bnHvJ';
    const image = 'https://sendeyo.com/en/f3eb2117da'
    const onToken = token => console.log(token);
    return (
        <StripeCheckout label='Pay Now' name='crwn-clothing' billingAddress shippingAddress image={image} description={`Your total is $${price}`} amount={priceParam} token={onToken} stripeKey={stripeKey} />
    );
}
//
export default StripeBtn;