'use strict';

const express = require('express');

//constants
const PORT = 8080;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';
const START = Date.now();

//function
function elapsed(){
    const running = (Date.now() - START) / 1000;
    const minutes = Math.floor(running / 60);
    const seconds = Math.floor(running % 60);
    const hours = Math.floor(minutes / 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

//app
const app = express();
app.get('/', (req, res) => {
    res.statusCode = 200;
    const msg = `Hello World from ${OS.hostname()} in ${ENV}! I have been running for ${elapsed()}`;
    res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;