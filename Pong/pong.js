const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.listen(5372);

const url = 'http://localhost:8080/ping';
const localhost = 'http://localhost:'
let port = null;

let cpt = 0;

app.get("/", function (_req, res) {
    res.send("Pong " + cpt);
    cpt++;
    setTimeout(myFetch, 500);
});
function myFetch() {
  fetch(localhost + port).then((res) => res.text()).then((text) => console.log(text));
  
}
async function myFetchPort() {
  port = await fetch(url).then((res) => res.text());
  myFetch(port);
}

if (!port) { myFetchPort(); }