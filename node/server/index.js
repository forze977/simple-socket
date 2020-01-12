var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected')
    socket.on('disconnect', function(){
        console.log('user disconnect')
    })
    socket.on('msg', function(msg){
        console.log('msg: ' + msg)
    });
});

http.listen(3100, function(){
  console.log('listening on *:3100');
});