import { RootState } from 'store/rootReducer';

export const appBasketVisibilitySelector = (state: RootState) => state.app.basketVisible;
