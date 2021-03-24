import { createSelector } from 'reselect';
//
export const selectShop = state => state.shop;
export const selectCollections = createSelector([selectShop], shop => shop.collections);
export const selectMensCollection = createSelector([selectCollections], collections => collections.mensCollection);
export const selectWomensCollection = createSelector([selectCollections], collections => collections.womensCollection);
export const selectHatCollection = createSelector([selectCollections], collections => collections.hatCollection);
export const selectSneakerCollection = createSelector([selectCollections], collections => collections.sneakerCollection);
export const selectJacketCollection = createSelector([selectCollections], collections => collections.jacketCollection);