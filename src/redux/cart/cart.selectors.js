import { createSelector } from 'reselect';
//
const selectCart = state =>(state.cart);
export const selectCartItems = createSelector([selectCart], cart => cart.items);
export const selectItemCount = createSelector([selectCartItems], items => items.reduce((itemCount, item)=>itemCount += item.quantity, 0));
export const selectShowCart = createSelector([selectCart], cart=>cart.showCart);
export const selectCartTotal = createSelector([selectCartItems], items => items.reduce((total, item)=>total += item.quantity * item.price, 0));