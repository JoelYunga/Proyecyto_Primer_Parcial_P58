const file = {
    demand: true,
    alias: "f",
    desc: "Permite establecer el path del archivo CSV"
}
const country = {
    default: true,
    alias: "c",
    desc: "Permite determinar el pais a analizar"
}

const years = {
    default: true,
    alias: "y",
    desc: "Permite especificar el año para las estadisticas"
}
const out = {
    default: true,
    alias: "o",
    desc: "Estable el nombre del archivo donde se almacena los resultados"
}


const argv = require("yargs")
    .command("publicar", "Publica las estadisticas", {
        file,
        country,
        years
    })
    .command("guardar", "Guardar las estadisticas", {
        out
    })
    .help()
    .argv;

module.exports = {
    argv
}