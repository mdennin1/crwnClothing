import SHOP_ACTIONS from '../../constants/shopActions';
//
export const shopNav = url =>({
    type: SHOP_ACTIONS.navToPage,
    payload: url,
});