import { FAKE_STORE_API } from "./index.js";
export async function crearProducto(nuevoProducto) {

  const response = await fetch(`${FAKE_STORE_API}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoProducto),
  });
  const data = await response.json();
  console.log("Producto creado con éxito", data);
}