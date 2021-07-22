#Paso a paso para implentar nuestro primer servidor en Node JS

1) Instalar GIT
2) Instalar Node JS
3) Inicializar un proyecto de Node en una carpeta
4) Instalar dependencias de producción (express, sharp, multer) y de desarrollo (nodemon) 
5) Configurar middelware de multer para poder recibir una imagen mediante la propiedad "file" de la request
6) Inicializar express en una constante
7) Configurar las rutas de nuestro servidor
8) Setear el puerto en el que va a estar escuchando
9) Poner a escuchar peticiones nuestro servidor
10) Crear cuenta en Github
11) Subir nuestro repositorio de GIT a Github
12) Crear una cuenta en Heroku y luego una APP
13) Configurar la APP de Heroku para conectarla con Github para que se haga un DEPLOY cada vez que pusheamos cambios a Github
14) Hacer nuestro primer PUSH a nuestro repositorio de Github
15) Crear la acción de Power Automate que hace la petición a nuestro servidor
16) Parsear la RESPONSE de nuestro servidor en Power Automate para tener a mano la propiedad IMAGE.

Contenido del CUERPO del flujo de Power Automate:

```json
{
  "$content-type": "multipart/form-data",
  "$multipart": [
    {
      "body": --- Acá tienen que poner el contenido de los datos adjuntos ---,
      "headers": {
        "Content-Disposition": "form-data;name=image;filename=prueba.png"
      }
    }
  ]
}
```