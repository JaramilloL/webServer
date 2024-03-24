//traemos las variables de entorno creadas en config/env.js
// const { vars } = require('./config/env')
// const { startServer } = require('./server/server')
import { vars } from './config/env.js'
import { startServer } from './server/server.js'

const main = ()=>{
    startServer({
        port: vars.PORT,
        public_path: vars.PUBLIC_PATH
    })
}

//creamos una funcion autoejecutada
(async ()=> {
    //funcion a ejecutar
    main() 
})()