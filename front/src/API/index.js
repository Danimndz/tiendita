import axios from "axios";

const url = "http://localhost:3004/productos";

export const fetchProducts = async () => {
  const datos = await axios.get(url);
  return datos.data;
};
