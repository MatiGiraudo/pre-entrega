import { obtenerProductos } from "./obtenerProductos.js";
import { crearProducto } from "./crearProducto.js";
import { eliminarProducto } from "./eliminarProducto.js";
import { actualizarProducto } from "./actualizarProducto.js";
export const FAKE_STORE_API = "https://fakestoreapi.com";

const argumentos = process.argv.slice(2);
console.log("Argumentos:", argumentos);
const [metodo, recurso, ...postArgs] = argumentos;
const [rec, id] = recurso.includes("/")
  ? recurso.split("/")
  : [recurso, null];

if (!metodo || !recurso) {
  console.log("--------------------------------");
  console.log("Error de argumentos");
  console.log("--------------------------------");
  console.log("Formato de uso: npm start <MÉTODO> <RECURSO>");
  console.log("--------------------------------");
  console.log("Ejemplo: npm start GET products");
  console.log("--------------------------------");

  process.exit(1);
}

switch (metodo) {
  case "GET":
    obtenerProductos( rec, id);
    break;
  case "POST":
    if (postArgs.length < 1) {
      console.log("Faltan argumentos. Siga este formato:");
      console.log(
        'npm start POST products <<"NOMBRE DEL PRODUCTO">> <<PRECIO>> <<"DESCRIPCION DE PRODUCTO">> <<"URL DE IMAGEN">> <<CATEGORIA>>'
      );
      process.exit(1);
    }
    console.log("Parámetros de POST:", postArgs);
    const productoNuevo = {
      title: postArgs[0] || "Sin especificar",
      price: parseFloat(postArgs[1]) || 0.0,
      description: postArgs[2] || "Sin especificar",
      image: postArgs[3] || "Sin especificar",
      category: postArgs[4] || "Sin especificar",
    };
    console.log("Producto a enviar:", productoNuevo);
    crearProducto(productoNuevo);
    break;
  case "DELETE":
    if (!id) {
      console.log("Falta el ID para eliminar un producto. Formato:");
      console.log("npm start DELETE <<products/id>>");
    }
    eliminarProducto(id);
    break;
  case "PUT":
    if (!id) {
      console.log("Falta el ID para actualizar un producto. Formato:");
      console.log(
        "npm start PUT <<products/id>> <<NUEVO NOMBRE>> <<NUEVO PRECIO>> <<NUEVA DESCRIPCION>> <<NUEVA URL DE IMAGEN>> <<NUEVA CATEGORIA>>"
      );
    }
    actualizarProducto(rec,id, postArgs);
    break;
  default:
    console.log("Método no soportado");
}

console.log("Método:", metodo);

console.log("Recurso desestructurado:", rec);
id && console.log("ID desestructurada:", id);

