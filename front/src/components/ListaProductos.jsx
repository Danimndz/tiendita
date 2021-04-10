import React from "react";
import { BiAtom, BiCart, BiMoney, BiShoppingBag } from "react-icons/bi";

const ListaProductos = ({ productos }) => {
  const openModal = (id) => {
    console.log(id);
  };
  return (
    <div className="div-container">
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
              {" "}
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
                    <button
                      className="editBtn"
                      onClick={() => openModal(producto.id)}
                    >
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
