import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../API";
import ListaProductos from "../components/ListaProductos";

const Main = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    fetchProducts().then((data) => {
      setProductos(data);
    });
  }, []);
  return <ListaProductos productos={productos} />;
};

export default Main;
