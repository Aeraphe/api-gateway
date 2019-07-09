"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var https = require("https");
var fs = require("fs");
var socketIO = require("socket.io");
require('dotenv').config({ debug: process.env.DEBUG });
var PORT = process.env.API_GATEWAY_SERVER_PORT;
var app = new app_1.App().app;
var httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};
var server = https.createServer(httpsOptions, app);
// SocketIo
var io = socketIO.listen(server);
io.on('connection', function (socket) {
    console.log('a user connected');
});
server.listen(PORT, function () {
    console.log('Express server listening ApiGateway Https  on port ' + PORT);
});
//# sourceMappingURL=server.js.map