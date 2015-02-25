var port = 1337;
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);



var configDB = require('./config/database.js');
mongoose.connect(configDB.url, function(error) {
	if (error) {
        console.log(error);
    }
});

app.set('views', __dirname + '/app/views');
	app.engine('html', require('ejs').renderFile);
	

require('./app/routes/routes.js')(app, server); 




server.listen(port);
 
console.log('Server running at http://localhost:' + port);