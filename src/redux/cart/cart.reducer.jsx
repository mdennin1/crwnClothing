import CART_ACTIONS from '../../constants/cartActions';
const INITIAL_STATE ={
    showCart: false,
    items: [],
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CART_ACTIONS.addToCart:
            const { items } = state;
            items.push(action.payload);
            return state = {...state, items: items };
        case CART_ACTIONS.toggleShowCart:
            return state = {...state, showCart: !state.showCart}
        default:
            return state;
    }
}
export default cartReducer;