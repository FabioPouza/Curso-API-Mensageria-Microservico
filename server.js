const http = require('http');
const app = require('./server/config/server/express');\
//a

var server = http.createServer(app);

server.listen(3001, () => {
    console.info('Servidor iniciadoa na porta: ' + server.address().port);
} );

