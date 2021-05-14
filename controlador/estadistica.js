const fs = require('fs');
const colors = require("colors");

let datosEstadisticos = [];

const guardarDatos = () => {
    let data = JSON.stringify(datosEstadisticos);
    fs.writeFile('./data/datos.json', data, (err, data) => {
        if (err) throw new Error('No se pudo guardar la data', err);
    });
}

const leerDatos = () => {
    try {
        datosEstadisticos = require('../data/datos.json');
    } catch (error) {
        datos = []
    }
}