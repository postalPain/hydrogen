import { IWarehouseState } from 'store/warehouse/reducers/types';
import { WarehouseActionTypes } from 'store/warehouse/actions/types';

const defaultState: IWarehouseState = {
  data: null,
  loading: false,
  error: null,
};

export default function warehouse(state: IWarehouseState = defaultState, action) {
  switch (action.type) {
    case WarehouseActionTypes.GET_CLOSEST_WAREHOUSE: {
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    }
    case WarehouseActionTypes.GET_CLOSEST_WAREHOUSE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
