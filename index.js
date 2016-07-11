var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.emit('news', { hello: 'socket' });
  socket.on('my event', function(data) {
    console.log(data);
  });
});
