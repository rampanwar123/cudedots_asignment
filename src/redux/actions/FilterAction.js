import { FilterActionTypes } from "../actionTypes";
import { BuildingsData } from "../Products";

const Loader = (payload) => {
  return {
    type: FilterActionTypes.LOADER,
    payload,
  };
};

const updateData = (payload) => {
  return {
    type: FilterActionTypes.UPDATE_DATA,
    payload,
  };
};

export const filterData = (data) => async (dispatch) => {
  dispatch(Loader(true));
  const response = BuildingsData();

  dispatch(updateData(response));
};

// const filterByValue = (response, data) => {
//   const va = data.floor;
//   console.log(va);
//   // let positive_array = response.filter((value) => value >= 0);
// };
