import { createSelector } from 'reselect';
//
const selectCart = state =>(state.cart);
export const selectCartItems = createSelector([selectCart], (cart) => cart.items);
export const selectItemCount = createSelector([selectCartItems], (items)=> items.reduce((itemCount, item)=>itemCount += item.quantity, 0));