import { FAKE_STORE_API } from "./index.js";
export async function obtenerProductos(recurso, id) {
  const response = await fetch(`${FAKE_STORE_API}/${recurso}${id ? "/" + id : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log("Status:", statusCode);
  // console.log("OK:", isOk);

  const data = await response.json();
  const productos = Array.isArray(data) ? data : [data]; //Convierto en array si hay un solo producto
  // console.log("Productos:", productos);
  productos.forEach((producto) => {
    console.log("--------------------------------");
    console.log(producto);
  });
}
