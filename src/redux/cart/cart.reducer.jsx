import CART_ACTIONS from '../../constants/cartActions';
import { addItemToCart, decreaseItemQuantity } from './cart.utils';
import { removeFromCart } from './cart.utils';
//
const INITIAL_STATE ={
    showCart: false,
    items: [],
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    const { items } = state;
    const { payload } = action;
    switch(action.type){
        case CART_ACTIONS.addToCart:
            return {...state, items: addItemToCart(items, payload)};
        case CART_ACTIONS.decreaseItemQuantity:
            return {...state, items: decreaseItemQuantity(items, payload)};
        case CART_ACTIONS.removeFromCart:
            return {...state, items: removeFromCart(items, payload)};
        case CART_ACTIONS.toggleShowCart:
            return {...state, showCart: !state.showCart};
        default:
            return state;
    }
}
export default cartReducer;