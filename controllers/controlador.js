const {request, response}=require('express')
const {insertarJugador}=require('../services/servicios.js')
const {leerJugador}=require('../services/servicios.js')
const {leerJugadores}=require('../services/servicios.js')
const {modificarJugador}=require('../services/servicios.js')
const {borrarJugador}=require('../services/servicios.js')

async function registrarJugador(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss..."+error
        })

    }
}

async function buscarJugador(peticion=request,respuesta=response){
    
    let id=peticion.params.id
        
    try{

        let jugador=await leerJugador(id)
        respuesta.status(200).json({
            estado:true,
            datos: jugador
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss..."+error
        })

    }    
    
}


async function buscarJugadores(peticion=request,respuesta=response){
    
    try{

        let jugadores=await leerJugadores()
        respuesta.status(200).json({
            estado:true,
            datos: jugadores
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss..."+error
        })

    }    
    

}

async function editarJugador(peticion=request,respuesta=response){
    
    let datos=peticion.body
    let id=peticion.params.id

    try{

        await modificarJugador(id,datos)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss..."+error
        })

    }


}

async function eliminarJugador(peticion=request,respuesta=response){
    
    let id=peticion.params.id

    try{

        await borrarJugador(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito mandando a la banca el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Upsss..."+error
        })

    }
}



module.exports={
    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador
}
