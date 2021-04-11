import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { comprarProductos } from "../API";
import { obtenerPrecio } from "../Redux/actions";
/**
 * function that to see the total of the sale and update de database
 */
const PriceReview = () => {
  const productos = useSelector((state) => state.productos);
  const [precio, setPrecio] = useState(null);
  const history = useHistory();
  /**
   * function to make a sale and update the database
   */
  const submitProduct = () => {
    comprarProductos(productos);
  };

  const goBack = () => history.go(0);

  useEffect(() => {
    setPrecio(obtenerPrecio(productos));
  }, []);
  return (
    <div>
      <h3>Confirma tu compra</h3>
      {productos.map((producto, idx) => {
        return (
          <div key={idx}>
            <label>{producto.nombre},</label>
            <label> cantidad: {producto.cantidad}</label>
          </div>
        );
      })}
      <label>total: {precio} </label>
      <div>
        <button onClick={submitProduct}>confirmar</button>
        <button onClick={goBack}>cancelar</button>
      </div>
    </div>
  );
};

export default PriceReview;
