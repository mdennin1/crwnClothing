import USER_ACTIONS from '../../constants/userActions';
//
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case 'SET_CURRENT_USER':
            return state = {...state, currentUser: action.payload};
        default:
            return state;
    }
}
export default userReducer;