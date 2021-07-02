const express = require("express");
const app = express();
app.listen(4567);
const url = 'http://172.17.0.2:8080/pong';
const localhost = 'http://172.17.0.4:';
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
  try {
      port = await fetch(url).then((res) => res.text());
      myFetch(port);
  } catch (error) {
    console.error(error);
}
}
  
if (!port) { getPort(); }