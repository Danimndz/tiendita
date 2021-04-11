import axios from "axios";

const url = "http://localhost:8090/api";

export const fetchProducts = async () => {
  const datos = await axios.get(`${url}/getProductos`);
  return datos.data;
};
/**
 * function to rest the quantities of each product on the data base
 * @param {Array[Object]} products An array of the products that will be sold
 * @return {nothing}
 */
export const comprarProductos = async (productos) => {
  productos.forEach((producto) => {
    axios.get(`${url}/getProducto/${producto.id}`).then((res) => {
      let data = res.data;
      data.cantidad -= producto.cantidad;
      console.log("cantidad", data.cantidad);
      axios.put(`${url}/registrarVenta/${producto.id}`, data).then(() => {
        return;
      });
    });
  });
};
