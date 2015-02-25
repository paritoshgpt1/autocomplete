var Word = require('../models/words');

module.exports = function(app, server) {
    app.get('/', function(req, res){
    	res.render('index.html');
    });

    app.get('/search', function(req, res){

    	var word = new RegExp(req.query.word, 'i');
    	var query = Word.find({"def": word}).limit(20);

    	query.exec(function(err, words) {
    		if(!err)
    		{
    			res.send(words,'Content-Type: application/json', 200);
    		}
    		else
    		{
    			res.send(JSON.stringify(err),'Content-Type: application/json', 404);
    		}
    	});


    });
};