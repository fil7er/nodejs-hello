var express = require('express')
const process = require('process');
const PORT = process.env.PORT || 5000;
var expressapp = express();
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hello World by fil7er v3"}')
});
expressapp.listen(PORT, function () {
    console.log('for testing purposes only!')
});
