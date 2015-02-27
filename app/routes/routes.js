// var express=require('express');
// var db = require('../models/words');

module.exports = function(app) {
    var db = require('../models/words');
    // var express = require('express');
    // var app = express();
    console.log("inside routes")
    app.get('/',function(req,res){
        res.render('index.html');
    });

    app.get('/search',function(req,res){
        var word = new RegExp(req.query.word, 'i');
        var query = db.find({"def": word}).limit(20);
        query.exec(function(err, words) {
            if (err) throw err;
            var data = [];
            for(i=0;i<words.length;i++)
            {
                data.push(words[i]['def']);
            }
            res.end(JSON.stringify(data));
        });
    });
};