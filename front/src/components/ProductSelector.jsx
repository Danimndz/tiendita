import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveData } from "../Redux/actions";

/**
 * @param {function} setShowModal - function that returns true or false to manage the Modal.
 * @param {Object} producto - specific product.
 */
const ProductSelector = ({ producto, setShowModal }) => {
  const [cantidad, setCantidad] = useState(null);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  /**
   * function that saves data in redux
   */
  const getCantidad = () => {
    const obj = {
      id: producto.id,
      nombre: producto.nombre,
      cantidad,
      precio: producto.precio,
    };
    if (cantidad <= producto.cantidad && cantidad > 0) {
      /**
       * set a flag to show errors
       */
      setFlag(false);
      /**
       * dispatch an action to save data in redux
       * @param {Object} obj data to be saved
       */
      dispatch(saveData(obj));
      /**
       * function that sets value to false
       * @param {boolean} value variable to see if the Modal shows or not
       */
      setShowModal((value) => !value);
    } else {
      setFlag(true);
    }
  };
  return (
    <div>
      <label className="modal-h1">Selecciona la cantidad:</label>
      <input
        onChange={(event) => setCantidad(parseInt(event.target.value))}
        type="number"
        min="1"
        max={producto.cantidad}
      />
      <meta />
      {flag ? <p className="error">No es la cantidad suficiente</p> : null}
      <button onClick={getCantidad}>seleccionar</button>
    </div>
  );
};

export default ProductSelector;
