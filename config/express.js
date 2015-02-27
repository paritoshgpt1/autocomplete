var express = require('express');
var mongoose = require('mongoose');

module.exports = function() {
var app=express();
app.set('views', __dirname + '/app/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('./public'));
require('./app/routes/routes.js')(app);

var configDB = require('./config/database.js');
mongoose.connect(configDB.url, function(error) {
	if (error) {
        console.log(error);
    }
});

return app;
};