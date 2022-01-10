import { RootState } from 'store/rootReducer';

export const warehouseIdSelector = (state: RootState) => state.warehouse.data.uuid;
