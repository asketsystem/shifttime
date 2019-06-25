'use strict';

const Hapi = require('@hapi/hapi');
//Create a server with a host and port 
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
// Add the route 
    server.route({
        method: 'GET',
        path:'/hello',
        handler: (request, h) => {

            return 'Hello World from shifttime!';
        }
    });
server.route({
    method: 'POST',
    path: '/shift',
    handler: (request, h)  => {

        return request.payload;
    }
});

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();