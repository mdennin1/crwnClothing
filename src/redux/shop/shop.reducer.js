import SHOP_ACTIONS from '../../constants/shopActions';
import SHOP_DATA from './shopData';
  //
  const INITIAL_STATE = { collections: SHOP_DATA };
  const shopReducer = (state = INITIAL_STATE, action) => {
      switch(action.type){
          case SHOP_ACTIONS.navToPage:
              break;
          default:
              return state;
      }
  };
  //
  export default shopReducer;