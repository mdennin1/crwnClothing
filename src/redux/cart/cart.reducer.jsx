import CART_ACTIONS from '../../constants/cartActions';
const INITIAL_STATE ={
    showCart: false,
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CART_ACTIONS.toggleShowCart:
            return state = {...state, showCart: !state.showCart}
        default:
            return state;
    }
}
export default cartReducer;