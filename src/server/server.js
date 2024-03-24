//aqui vamos a configurar el servidor
const express = require("express");
const path = require("path");

const startServer = (options) => {
  //desestructuramos el objeto que viene desde app y configuramos el path por defecto
  const { port, public_path = "public" } = options;
  // console.log(port)
  // console.log(public_path)

  //usamos las configuraciones de express para hacer un static es decir contener la informacion estatica de la carpeta public
  const app = express();

  app.use(express.static(public_path));

  //configuramos el request y el response cuando el cliente accesa a la url
  app.get("*", (request, response) => {
    //accedemos a la carpeta public donde se contiene el public path
    const indexPath = path.join(__dirname + `../../${public_path}/index.html`);
    response.sendFile(indexPath); //devolvemos siempre la pagina de index.html
});

//escuchamos desde el puerto
  app.listen(port,  ()=>{
    console.log(`escuchando desde el puerto ${port}`)
  })
};


//exportamos la funcion creada
module.exports = {
  startServer,
};
