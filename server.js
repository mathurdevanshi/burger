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

//connecting to the controller file
var controller = require('controllers/burgers_controller.js');

$("#sumbit").on("click", function(){
    var typedVale=$("#typedBurger").val();
    controller.createNewItem(typedVale);
})

$("#checkbox").on("click", function(){
    //somehow send the value of the id to controller.devourItem. controller.devourItem(id);
})