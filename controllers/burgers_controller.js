module.exports= function(){
    //import orm
    var ormFile = require("config/orm.js");
    //createNewItem
    this.createNewItem= function(typedValue){
        var sqlResults = ormFile.insertOne("burgers", "burger_name", "devoured", typedValue, false);
        var allSqlResults = ormFile.selectAll("burgers");
        return (sqlResults, allSqlResults);
    }
    //devourItem
    this.devourItem = function(id){
        var sqlResults = ormFile.updateOne("burgers", true, id);
        var allSqlResults = ormFile.selectAll("burgers");
        return (sqlResults, allSqlResults);
    }
    
};

