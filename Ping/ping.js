const express = require("express");
const app = express();
app.listen(4567);
const url = 'http://localhost:8080/pong';
const localhost = 'http://localhost:'
let port = null;
let cpt = 0;

const fetch = require("node-fetch");

app.get("/", function (_req, res) {
  res.send("Ping " + cpt);
  cpt++;
  setTimeout(myFetch, 500);
});

function myFetch() {
  fetch(localhost+ port).then((res) => res.text()).then((text) => console.log(text));
}
async function getPort() {
  port = await fetch(url).then((res) => res.text());
  myFetch(port);
}
if (!port) { getPort(); }