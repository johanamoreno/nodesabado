const JugadorModelo = require('../models/JugadorModelo.js')

async function insertarJugador(datosJugador){

    let jugadorAInsertar= new JugadorModelo(datosJugador)

    return await jugadorAInsertar.save()

}

async function leerJugador(id){

    let jugador=await JugadorModelo.findById(id)
    return jugador

}

async function leerJugadores(){

    let jugadores=await JugadorModelo.find()
    return jugadores

}

async function modificarJugador(id,datos){

    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

async function borrarJugador(id){

    return await JugadorModelo.findByIdAndDelete(id)
}

module.exports={
    insertarJugador,
    leerJugador,
    leerJugadores,
    modificarJugador,
    borrarJugador,
}