var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hello World by fil7er"}')
})
expressapp.listen(5000, function () {
    console.log('for testing purposes only!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});