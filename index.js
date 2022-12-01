const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

const app = express();

//Using express router
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running Server", err);
    return;
  }
  console.log("Server is up and running at port", port);
});