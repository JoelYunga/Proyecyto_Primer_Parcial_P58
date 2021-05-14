const { argv } = require('./config/yargs');
const { publicar, guardar } = require('./controlador/tareas');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('DATOS ESTADISTICOS');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


let comando = argv._[0];

switch (comando) {
    case 'publicar':
        console.log('Publicando los datos estadisticos...');
        let pub = publicar(argv.file, argv.country, argv.years);
        console.log(pub);
        break;
    case 'guardar':
        console.log('Guardando los datos estadisticos...');
        let guar = guardar(argv.out);
        console.log(guar)
        break;
    default:
        console.log('Comando no valido');

}