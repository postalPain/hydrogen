import { RootState } from 'store/rootReducer';
import { TProduct } from 'services/ServerAPI/types';

export const productsByCategoryIdSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].data || null
);
export const productsListSelector = (ids: string[]) => (state: RootState): TProduct[] => {
  const products: TProduct[] = Object.values(state.products).reduce((accum, product) => ([
    ...accum,
    ...(product.data || []),
  ]), []);

  return (
    ids.reduce((accum, id) => {
      const product = products.find(item => item.uuid === id);
      if (product) {
        return [
          ...accum,
          product,
        ];
      }
      return accum;
    }, [])
  );
};
export const productsLoadingSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].loading
);
