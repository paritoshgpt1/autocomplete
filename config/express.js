var express = require('express');

module.exports = function() {
    var app = express();
    app.set('views', './app/views');
	app.set('view engine', 'ejs');
    require('../app/routes/routes.js')(app);
    return app;
};