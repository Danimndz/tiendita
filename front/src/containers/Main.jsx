import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { fetchProducts } from "../API";
import ListaProductos from "../components/ListaProductos";
import Modal from "../components/Modal";
import { Button } from "../styled-components";

/**
 *
 * @version 1.0
 * @author DaniMndz
 */
const Main = () => {
  const from = 0;
  const [productos, setProductos] = useState(null);
  const [showModal, setShowModal] = useState(false);
  /**
   * @see See [Documentacion React](https://es.reactjs.org/docs/hooks-effect.html) to see Documentation on react hooks
   */
  useEffect(() => {
    fetchProducts().then((data) => {
      setProductos(data);
    });
  }, []);
  const openModal = () => {
    setShowModal((value) => !value);
  };
  /**
   * @param {object} productos - data fetched from the API.
   */
  return (
    <div>
      <Modal
        producto={null}
        showModal={showModal}
        setShowModal={setShowModal}
        from={from}
      />
      <Button onClick={openModal} data-testid="shoppingbag">
        <BiShoppingBag size={30} color="white" />
      </Button>
      <ListaProductos productos={productos} />
    </div>
  );
};

export default Main;
