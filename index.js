// Importar librebrías que necesitamos en nuestro servidor
const express = require("express");
const sharp = require("sharp");
const multer = require("multer");

// Configuración del middelware de procesamiento de imágenes Multer
const storageType = multer.memoryStorage();
const parseImage = multer({ storage: storageType }).single("image");

// Inicializamos el servidor de Express
const app = express();

// Configuramos las rutas de nuestro servidor
app.get("/", (req, res) => {
  console.log("Entramos en el GET!!");
  res.send("<h1>Tremendo, entramos en el GET!!!!</h1>");
});

app.post("/resize", parseImage, async (req, res) => {
  console.log(req.file);
  const { buffer } = req.file;

  const imageBuffer = await sharp(buffer)
    .resize(800, 800, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toBuffer();

  const imageInBase64 = imageBuffer.toString("base64");
  res.status(200).json({
    ok: true,
    image: { "$content-type": "image/png", $content: imageInBase64 },
  });
});

// Seteamos en qué puerto va a estar escuchando nuestro servidor,
// tanto en Desarrollo como en producción
app.set("port", process.env.PORT || 3000);

// Ponemos a nuestro servidor a escuchar en el puerto que seteamos
app.listen(app.get("port"), () => {
  console.log(`Server escuchando en el puerto ${app.get("port")}`);
});
