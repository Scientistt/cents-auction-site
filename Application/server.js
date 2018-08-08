var http = require('http');
var app =  require('./config/express');

require('./config/database')('localhost/centavosdb');

http.createServer(app).listen(3001, function () {
    console.log("Server listening on port 3001...");
});