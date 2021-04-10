import { SAVE_PRODUCTS } from "../constants";

/**
 * function that saves data in redux. This is the 'shopping cart'
 * @param {anu} state the state that you will be saving
 * @param {any} action value that distincts the type of action to cast.
 */
export const productos = (state = [], action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { productos: [...state.productos, action.payload] };
    default:
      return state;
  }
};
