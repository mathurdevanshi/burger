module.exports= function(){
    //import orm
    var ormFile = require("config/orm.js");
    
    var burger = {
        all: function(cb){
            ormFile.selectAll('burgers', function(res){
                cb(res);
            });
        },
        create: function(col, burger_name, cb){
            ormFile.insertOne('burgers', burger_name, function(res){
                cb(res);
            });
        },
        update: function(objColVals, condition, cb){
            ormFile('burgers', objColVals, condition, function(res){
                cb(res);
            });
        }
    }
    
};

