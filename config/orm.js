var express = require("express");
    var app = express();

var connection = require ("./connection.js");

function objToSQL(object){
    var arr=[];
    for (var key in object){
        if (ob.hasOwnProperty(key)){
            arr.push(key+ '='+ob[key]);
        }
    }
    return arr.toString();
}

var orm ={
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM' + table + " ;";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(table, burger_name, cb){
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, objColVals, condition, cb){
        var sql = "UPDATE " + tableName;
        sql += " SET " + objToSQL(objColVals);
        sql += " WHERE " + condition;
        sql += " ;";
    
        connection.query(sql, function(err, sqlResult){
            if(err){
                console.log("OH DEAR GOD SO MUCH IS GONE BAD!! WHY IS THERE SO MUCH BLOOD??");
                throw err;
            };
            res.json(sqlResult);
            return(sqlResult);
        });
    },
}; 


 module.exports = orm;
