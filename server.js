var express = require('express');  
var path = require('path'); 
var app = express()  
  , server = require('http').createServer(app)  
  , io = require('socket.io').listen(server);  
  var ejs = require('ejs');
var port = process.env.PORT || 3000;  
server.listen(port);  
app.get('/', function (req, res) {  
    res.render('index');  
});  
// app.set('views', './dist');  
// app.set('view engine', 'html');  
// app.engine('html', ejs.renderFile);  
// app.use('/', express.static('./dist'));  
  
var userNumber = 0;  
  
io.sockets.on('connection', function (socket) {  
    var signedIn = false;  
  
    socket.on('newMessage', function (text) {  
        console.log(text)
        io.sockets.emit('newMessage',{  
            name:'他',
            id:"2",
            info:text.info,
            bs:text.bs  
        })  
    });  
});  