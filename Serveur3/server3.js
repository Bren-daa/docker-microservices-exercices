const fetch = require("node-fetch");
const express = require("express");

const app = express();
app.listen(8080);

const portPing= '4567';
const portPong= '5372';

app.get("/ping", function(_req, res) {
    res.send(portPing);
});

app.get("/pong", function(_req, res) {
    res.send(portPong);
});