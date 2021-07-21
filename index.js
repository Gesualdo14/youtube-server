const express = require("express");
const sharp = require('sharp');
const multer = require('multer')

// Configuración de Multer
const storageType = multer.memoryStorage()
const parseImage = multer({ storage: storageType }).single('image')

const app = express();

app.use(express.json());

app.post("/resize",parseImage, async (req, res) => {
    console.log(req.file)
    const { buffer } = req.file

    const imageBuffer = await sharp(buffer)
                .resize(800, 800, {fit: 'contain', background: {r: 255, g: 255, b: 255, alpha: 1}}).toBuffer()

    const imageInBase64 = `${imageBuffer.toString('base64')}`
    res.status(200).json({ok: true, 
                          image: { "$content-type": 'image/png',
                                   "$content": imageInBase64
                                  }  
                          })

})

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    console.log("Entramos en el GET!!")
    res.send("<h1>Tremendo, entramos en el GET!!!!</h1>")
})



app.listen(app.get("port"), () => {
  console.log("###############################");
  console.log("########## API REST ###########");
  console.log("###############################");

  console.log(`Server escuchando en el puerto ${app.get("port")}`);
});

module.exports = app;
