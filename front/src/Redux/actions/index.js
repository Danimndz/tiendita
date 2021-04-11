import { SAVE_PRODUCTS } from "../constants";

/**
 * function that calls the reducer to save data in redux.
 * @param {Object} obj data to be saved
 * @param {function} dispatch function that calls the redux function
 */
export const saveData = (obj) => (dispatch) => {
  dispatch({
    type: SAVE_PRODUCTS,
    payload: obj,
  });
};
