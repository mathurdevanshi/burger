var express = require("express");
    var app = express();

var Connection = require ("./connection.js");
Connection.connection();

 function orm(){
     ///////INSERT ONE////////
     this.insertOne = function(tableName, column1, column2,value1, value2){
        app.post("/api/post", function(req, res){
            console.log("POST", req.body);
            var sql = "INSERT INTO " + tableName;
            sql += "("+ column1 + ", " + column2 + ")";  
            sql += " VALUES";
            sql += "(" +value1 + ", " + value2 + ")";
            sql += ";";
            connection.query(sql, [
                req.body.burger_name,
                req.body.devoured
            ], function(err, sqlResult){
                if(err){
                    console.log("OH DEAR GOD SO MUCH IS GONE BAD!! WHY IS THERE SO MUCH BLOOD??");
                    throw err;
                };
                res.json(sqlResult);
                return(sqlResult);
            });
        }); 
    }

    ////////SELECT ALL////////
    this.selectAll = function(tableName){
        app.get("/api/get", function(req, res){
            var sql = "SELECT * FROM " + tableName + " ORDER BY ID DESC;"
            connection.query(sql, function(err, sqlResult){
                if(err){
                    console.log("OH DEAR GOD SO MUCH IS GONE BAD!! WHY IS THERE SO MUCH BLOOD??");
                    throw err;
                };
                res.json(sqlResult);
                return(sqlResult);
            });
            
        }); 
    }


    ///////UPDATE ONE () ///////
    this.updateOne= function(tableName, booleanValue, idNumber){
    app.put("/api/put", function(req, res){
        console.log("PUT", req.body);
        var sql = "UPDATE " + tableName;
        sql += " SET boolean= " + booleanValue;
        sql += " WHERE id= " + idNumber;
        sql += " ;";
    
        connection.query(sql, [
            req.body.boolean,
            req.body.id
        ], function(err, sqlResult){
            if(err){
                console.log("OH DEAR GOD SO MUCH IS GONE BAD!! WHY IS THERE SO MUCH BLOOD??");
                throw err;
            };
            res.json(sqlResult);
           return(sqlResult);
        });
    }); 



    ///////LISTENING PORT (NOT IN A FUNCTION LIKE ANDY SAID :) )
        app.listen(PORT, function(){
            console.log("Web server is running on port: ", PORT);
        });
    }
 }

 module.exports = orm;
