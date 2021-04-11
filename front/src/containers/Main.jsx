import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../API";
import ListaProductos from "../components/ListaProductos";

/**
 *
 * @version 1.0
 * @author DaniMndz
 */
const Main = () => {
  const [productos, setProductos] = useState(null);
  /**
   * @see See [Documentacion React](https://es.reactjs.org/docs/hooks-effect.html) to see Documentation on react hooks
   */
  useEffect(() => {
    fetchProducts().then((data) => {
      setProductos(data);
    });
  }, []);
/**
 * @param {object} productos - data fetched from the API.
 */
  return <ListaProductos productos={productos} />;
};

export default Main;
