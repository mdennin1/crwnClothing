import CART_ACTIONS from '../../constants/cartActions';
//
export const addToCart = newItem =>({
    type: CART_ACTIONS.addToCart,
    payload: newItem,
});
export const toggleShowCart = () =>({
    type: CART_ACTIONS.toggleShowCart,
});
