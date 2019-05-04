var ORM = require  ("config/orm.js");
var CONNECTION = require  ("config/connection.js");

//this will create a connection to Heroku
const PORT = porcess.env.PORT|| 5000;
const server = http.createServer((req,res) => {
    res.StatusCode = 200;
    res.setHeader ('conent-Type', 'text/plain');
    res.end('Hello World\n')
});
server.listen(PORT, () => {
    console.log('Server running pn ${PORT}/')
});

//this will connect to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "webuser",
    password: "UCR",
    database: "personal_journal"
});
connection.connect(function(err){
    if(err){
        console.log("This is bad. Run now. Run far and fast. It is most likely already behind you.");
        return;
    }
    console.log("MySQL connected: " + connection.threadId);
});

//this will create a connection to the ORM file
new ORMfunctions = new ORM();

//this will listen for the ports
app.listen(PORT, function(){
    console.log("Web server is running on port: ", PORT);
});

//this will call the insertOne() function:
ORMfunctions.insertOne();

//this will call the selectAll() function: 
ORMfunctions.selectAll();

//this will call the updateOne() function:
ORMfunctions.updateOne();
