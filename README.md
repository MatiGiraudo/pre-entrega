# API FakeStore - Cliente CRUD - Pre entrega de proyecto para curso de Backend con Node.js - Talentotech 2025

Un cliente de línea de comandos en Node.js para interactuar con la API de FakeStore, implementando operaciones CRUD completas con funcionalidades avanzadas.

## 🚀 Características

- **Operaciones CRUD completas**: GET, POST, PUT, DELETE
- **Modularización**: Código organizado en módulos separados
- **Destructuring y Spread Operator**: Uso avanzado de ES6+
- **Funcionalidad "current"**: Mantiene propiedades existentes en actualizaciones
- **Manejo de argumentos**: Procesamiento de comandos mediante `process.argv`
- **Fetch API**: Interacción con APIs REST

## 📋 Requisitos

- Node.js v14 o superior
- npm

## 🛠️ Instalación

```bash
# Clonar el proyecto
git clone https://github.com/MatiGiraudo/pre-entrega.git
cd pre-entrega

# Instalar dependencias (si las hay)
npm install
```

## 📖 Uso

### Obtener productos

```bash
# Obtener todos los productos
npm start GET products

# Obtener un producto específico
npm start GET products/1
```

### Crear producto

```bash
npm start POST products "Nombre del Producto" 19.99 "Descripción del producto" "https://imagen.jpg" "categoria"
```

### Actualizar producto

```bash
# Actualizar todas las propiedades
npm start PUT products/1 "Nuevo Nombre" 25.99 "Nueva descripción" "https://nueva-imagen.jpg" "nueva-categoria"

# Mantener propiedades existentes con "current"
npm start PUT products/1 current 25.99 "Nueva descripción" current current
```

### Eliminar producto

```bash
npm start DELETE products/1
```

## 🔧 Funcionalidades Especiales

### Palabra clave "current"

Al usar el método PUT, puedes usar la palabra "current" para mantener el valor actual de una propiedad:

```bash
# Solo cambiar el precio, mantener el resto igual
npm start PUT products/1 current 29.99 current current current
```

### Manejo de respuestas

- **Array vs Objeto**: El código maneja automáticamente respuestas que pueden ser arrays u objetos únicos
- **Destructuring**: Los argumentos se procesan usando destructuring para mayor claridad
- **Spread Operator**: Se utiliza para combinar y actualizar objetos de forma eficiente

## 📁 Estructura del Proyecto

```
pre-entrega/
├── index2.js              # Archivo principal y router de comandos
├── obtenerProductos.js    # Módulo para operaciones GET
├── crearProducto.js       # Módulo para operaciones POST
├── actualizarProducto.js  # Módulo para operaciones PUT
├── eliminarProducto.js    # Módulo para operaciones DELETE
├── package.json          # Configuración del proyecto
└── README.md            # Este archivo
```

## 🔍 Ejemplos de Uso

```bash
# Consultar producto específico
npm start GET products/5

# Crear un nuevo producto
npm start POST products "Camiseta React" 15.99 "Camiseta para desarrolladores" "https://ejemplo.jpg" "clothing"

# Actualizar solo el precio
npm start PUT products/5 current 12.99 current current current

# Eliminar producto
npm start DELETE products/5
```

## 🛡️ Manejo de Errores

- Validación de argumentos requeridos
- Verificación de existencia de productos
- Manejo de respuestas de error de la API
- Mensajes informativos para el usuario

## 🌐 API Utilizada

Este proyecto utiliza [FakeStore API](https://fakestoreapi.com/) para simular operaciones de comercio electrónico.

## 📝 Scripts Disponibles

- `npm start`: Ejecuta el cliente con los argumentos proporcionados
- `npm test`: (Pendiente de implementación)
