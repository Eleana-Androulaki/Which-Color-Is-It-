var express = require("express");
var app	    = express();
const port	= 8080;
var path 	= require('path');
app.use(express.static("views",{index: "ColorGame.html"}));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join("views" + '/ColorGame.html'));
});

app.listen(port);