import express from "express";
const Web3 = require("web3");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Ethereum!");
});
app.listen(port, (): void => {
  console.log(`server is listening on ${port}`);
});
