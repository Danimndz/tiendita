import axios from "axios";
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

/**
 * function that returns the total of your sale.
 * if the quantity of any product is greater than 2 but less than 5, apply a 5% discount
 * if quantity is greater than 5 aply a 10% discount
 * if you buy 3 or more products, then apply 40% discount
 * @param {Object} productos product info to get the prices
 * @return {float} the total of the payment
 */

export const obtenerPrecio = (productos) => {
  let total = 0;
  let precioOriginal = 0;
  if (productos.length === 1 && productos[0].cantidad === 1) {
    total = productos[0].precio;
    console.log("uno");
    return total;
  }
  if (productos.length >= 3) {
    productos.forEach((producto) => {
      precioOriginal += producto.precio * producto.cantidad;
      let descuento = precioOriginal * 0.4;
      total = precioOriginal - descuento;
      return total;
    });
  } else {
    let auxTotal1 = 0;
    let precioOriginal1 = 0;
    let precioOriginal2 = 0;
    let auxTotal2 = 0;
    productos.forEach((producto) => {
      if (producto.cantidad >= 2 && producto.cantidad < 5) {
        precioOriginal1 = producto.precio * producto.cantidad;
        let descuento = precioOriginal1 * 0.05;
        auxTotal1 += precioOriginal1 - descuento;
      } else if (producto.cantidad >= 5) {
        precioOriginal2 = producto.precio * producto.cantidad;
        let descuento = precioOriginal2 * 0.1;
        auxTotal2 += precioOriginal2 - descuento;
      }
      total = auxTotal1 + auxTotal2;
      console.log("total", total);
    });
  }
  return total;
};
