import { App } from './app';
import * as https from 'https';
import * as fs from 'fs';
import * as socketIO from 'socket.io';

require('dotenv').config({ debug: process.env.DEBUG });
const PORT = process.env.API_GATEWAY_SERVER_PORT;
let app = new App().app;

const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

const server = https.createServer(httpsOptions, app);
// SocketIo
const io = socketIO.listen(server);
io.on('connection', (socket: SocketIO.Socket) => {
    console.log('a user connected');
});


server.listen(PORT, () => {
    console.log('Express server listening ApiGateway Https  on port ' + PORT);
});
