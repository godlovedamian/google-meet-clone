//create an express application in typescript
var express = require('express');
var app = express();
//create a server
var server = require('http').createServer(app);
//create a socket.io instance
var io = require('socket.io')(server);
//create a port
var port = process.env.PORT || 3000;
//start the server
server.listen(port, function () {
    console.log('Server listening at port %d', port);
});
//create a route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
//create a socket.io route
io.on('connection', function (socket) {
    console.log('A user connected');
    //create a socket.io route
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
    //create a socket.io route
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        //send a message to all connected clients
        io.emit('chat message', msg);
    });
});
//# sourceMappingURL=server.js.map
