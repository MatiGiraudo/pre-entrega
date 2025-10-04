import { FAKE_STORE_API } from "./index.js";
export async function eliminarProducto(id) {
  const response = await fetch(`${FAKE_STORE_API}/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("Producto eliminado con éxito", data);
}
