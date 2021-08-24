import { FilterActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  data: null,
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FilterActionTypes.LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FilterActionTypes.UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default FilterReducer;
