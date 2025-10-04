import { FAKE_STORE_API } from "./index.js";
export async function actualizarProducto(rec, id, postArgs) {
  if (postArgs.length < 1) {
    console.log("Faltan argumentos. Siga este formato:");
    console.log(
      'npm start PUT products/id <<"NOMBRE DEL PRODUCTO">> <<PRECIO>> <<"DESCRIPCION DE PRODUCTO">> <<"URL DE IMAGEN">> <<"CATEGORIA">>'
    );
    console.log(
      "Use la palabra clave 'current' para mantener el valor actual."
    );
    return;
  }

  const productoToUpdate = await fetch(`${FAKE_STORE_API}/products/${id}`).then(
    (res) => res.json()
  );

  // Función para comparar y decidir el valor final
  const procesarArgumento = (valorNuevo, valorActual, esNumero = false) =>
    valorNuevo === "current"
      ? valorActual
      : esNumero
      ? parseFloat(valorNuevo)
      : valorNuevo;

  // Se crea el producto actualizado con los valores correspondientes
  const productoActualizado = {
    ...(postArgs[0] && {
      title: procesarArgumento(postArgs[0], productoToUpdate.title), // Si la propiedad ingresada en la terminal es "current" mantiene el valor actual
    }),
    ...(postArgs[1] && {
      price: procesarArgumento(postArgs[1], productoToUpdate.price, true),
    }),
    ...(postArgs[2] && {
      description: procesarArgumento(postArgs[2], productoToUpdate.description),
    }),
    ...(postArgs[3] && {
      image: procesarArgumento(postArgs[3], productoToUpdate.image),
    }),
    ...(postArgs[4] && {
      category: procesarArgumento(postArgs[4], productoToUpdate.category),
    }),
  };

  console.log("Producto a actualizar:", productoToUpdate);

  const response = await fetch(`${FAKE_STORE_API}/${rec}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...productoToUpdate, ...productoActualizado }), // Combina el producto actual con los nuevos valores
  });

  const data = await response.json();
  console.log("Producto actualizado con éxito", data);
}
