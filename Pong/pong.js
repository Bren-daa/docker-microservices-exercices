const fetch = require("node-fetch");
const express = require("express");
const app = express();
app.listen(5372);

const url = 'http://172.17.0.2:8080/ping';
const localhost = 'http://172.17.0.3:'
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
  try {
    port = await fetch(url).then((res) => res.text());
    myFetch(port);
  } catch (error) {
    console.error(error);
  }
}

if (!port) { myFetchPort(); }