var express = require("express");
var body_parse = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(body_parse.urlencoded({ extended: true }));
app.use(body_parse.json());

require(path.join(__dirname,"app","routing","apiRoutes.js"))(app);
require(path.join(__dirname,"app","routing","htmlRoutes.js"))(app);

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
})