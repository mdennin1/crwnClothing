import CART_ACTIONS from '../../constants/cartActions';
//
export const addToCart = newItem =>({
    type: CART_ACTIONS.addToCart,
    payload: newItem,
});
export const decreaseQuantity = item =>({
    type: CART_ACTIONS.decreaseItemQuantity,
    payload: item,
});
export const removeFromCart = item =>({
    type: CART_ACTIONS.removeFromCart,
    payload: item,
});
export const toggleShowCart = () =>({
    type: CART_ACTIONS.toggleShowCart,
});
