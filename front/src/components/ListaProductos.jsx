import React, { useState } from "react";
import { BiAtom, BiCart, BiMoney, BiShoppingBag } from "react-icons/bi";
import Modal from "./Modal";

/**
 * Show a list of the products on a table
 * @param {Object} pros.productos - products that got send from the main
 */
const ListaProductos = ({ productos }) => {
  const from = 1;
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);


  /**
 * @param {object} [data] - specific data of the a product
 */
  const openModal = (data) => {
    setProduct(data);
    setShowModal((value) => !value);
  };

  return (
    <div className="div-container">
      <Modal
        producto={product}
        showModal={showModal}
        setShowModal={setShowModal}
        from={from}
      />
      <table className="content-table">
        <thead>
          <tr>
            <th>
              <BiShoppingBag size={15} /> Name
            </th>
            <th>
              <BiMoney size={15} /> Price
            </th>
            <th>
              <BiAtom size={15} /> Quantity
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((producto, idx) => {
              return (
                <tr key={idx}>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.cantidad}</td>
                  <td>
                    <button className="editBtn" onClick={() => openModal(producto)}>
                      <BiCart size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

    </div>
  );
};

export default ListaProductos;
