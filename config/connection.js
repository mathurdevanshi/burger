

module.exports = function connection(){
    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "webuser",
        password: "UCR",
        database: "burgers_db"
    });
    connection.connect(function(err){
        if(err){
            console.log("This is bad. Run now. Run far and fast. It is most likely already behind you.");
            return;
        }
        console.log("MySQL connected: " + connection.threadId);
    });
    app.listen(PORT, function(){
        console.log("Web server is running on port: ", PORT);
    }); 

}


