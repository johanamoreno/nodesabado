const express = require('express')

const{conectarBD}=require('../database/conexion.js')

const rutas=require('../routes/rutas.js')
class ServidorModelo{

    constructor(){
        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()
        this.enrutarPeticiones()

    }

    encerderServidor(){

        this.app.listen(process.env.PUERTO, function(){

            console.log("Servidor encendido... "+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){
        this.app.use('/',rutas)
    }

    despertarBD(){
        conectarBD()
    }

    llamarAuxiliares(){
        this.app.use(express.json())
    }

}

module.exports=ServidorModelo