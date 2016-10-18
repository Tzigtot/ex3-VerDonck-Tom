
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

app.get("/results", function(request, response){
  response.send(calculatedValue);
});

app.post("/", function(request, response){
    var calculation = request.body.display;
    var calculatedValue = eval(request.body.display);
    uitkomst.push({"calculation": calculation, "result": calculatedValue});
    console.log(calculatedValue);
    response.status(200).send(calculatedValue);
    });

app.listen,(8383);
console.log("Server boot.");
