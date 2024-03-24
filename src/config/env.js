
//configuramos el tipo de variables a resivir y si estas son requeridas
// const { get } = require('env-var')
import env_var from 'env-var'
const { get } = env_var;

//aqui configiraremos las variables de entorno
// require('dotenv').config();
import env from 'dotenv'
env.config()

export const vars = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

// module.exports ={
//     vars
// }