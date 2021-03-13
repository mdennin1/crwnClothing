import USER_ACTIONS from '../../constants/userActions.js';
//
export const setCurrentUser = user =>({
    type: USER_ACTIONS.setCurrentUser,
    payload: user
});