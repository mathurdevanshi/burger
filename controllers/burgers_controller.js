module.exports = function (){
    // do all the importing npm files
    var express = require('express');
    var bodyParser=require('body-parser');
    var methodOverride= require('method-override');
    var router = express.Router();
    var burger = require('models/burger.js');

    // routing
    router.get('/', function (req, res){
        res.redirect('/burgers');
    });
    router.get('/burgers', function(req, res){
        burger.all(function(data){
            var hbsObject = {burgers:data};
            res.render('index', hbsObject);
        });
    });
    router.post('/burgers/create',function(req,res){
        burger.create('burger_name', req.body.burger_name, function(){
            res.redirect('/burgers');
        });
    });
    router.put('/burgers/update/:id', function(req, res){
        var condition = 'id =' + req.params.id;
        burger.update({devoured: req.body.devoured}, condition, function(){
            res.redirect('/burgers');
        });
    })
}