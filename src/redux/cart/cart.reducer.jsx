import CART_ACTIONS from '../../constants/cartActions';
import { addItemToCart } from './cart.utils';
const INITIAL_STATE ={
    showCart: false,
    items: [],
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CART_ACTIONS.addToCart:
            const { items } = state;
            const { payload } = action;
            console.log(`%citems: ${items}, payload: ${JSON.stringify(payload)}`, 'color: blue');
            return {...state, items: addItemToCart(items, payload)};
            // return {...state, items: items };
        case CART_ACTIONS.toggleShowCart:
            return state = {...state, showCart: !state.showCart}
        default:
            return state;
    }
}
export default cartReducer;