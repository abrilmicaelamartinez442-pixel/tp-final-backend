# API RESTful con CRUD y Capa de Servicios - UTN Backend

API RESTful modular desarrollada con Node.js, Express y MongoDB (Mongoose), aplicando el patrón de separación de responsabilidades (Controladores, Servicios y Modelos).

## Tecnologías Utilizadas
* Node.js & Express
* MongoDB & Mongoose
* Bcrypt (Encriptación de contraseñas)
* JSON Web Tokens (JWT para autenticación)
* Dotenv & Cors

## Esquema de la Base de Datos
* **Usuarios**: `nombre`, `email`, `contrasena` (hasheada)
* **Categorías**: `nombre`, `descripcion`
* **Productos**: `nombre`, `descripcion`, `precio`, `stock`, `categoria` (Referencia a ObjectId de Categorías)

## Instrucciones para Ejecutar el Proyecto
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install