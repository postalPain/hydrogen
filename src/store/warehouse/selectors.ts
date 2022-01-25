import { RootState } from 'store/rootReducer';

export const warehouseSelector = (state: RootState) => state.warehouse.data;
export const warehouseIdSelector = (state: RootState) => warehouseSelector(state).uuid;
export const warehouseCoordsSelector = (state: RootState) => warehouseSelector(state).coordinates;
