
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
var result = [];

app.get("/", function(request, response){
    response.sendfile(__dirname + '/index.html');
});

app.listen(8383);
console.log("Server boot.");

