import express from "express";
const Web3 = require("web3");
const fs = require("fs");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
const web3 = new Web3("https://cloudflare-eth.com");

require("dotenv").config()

// CHECK VALID ADDRESS

async function isAddress() {
  const checkIsAddress = await web3.utils.isAddress(process.env.ADDRESS);
  console.log(checkIsAddress);
  return checkIsAddress;
}

isAddress();

// CHECK BALANCE AND ADD BALANCE TO FILE

let dateNow = Date.now();

async function getBalance() {
  const getBalanceAddress = await web3.eth.getBalance(
  process.env.ADDRESS);
  console.log("Result:", getBalanceAddress);
  fs.appendFileSync("log.txt", `Balance: ${getBalanceAddress} Ether, Date: ${dateNow} \n`);
  console.log("Balance added!");
}

// SET INTERVAL 60 SEC

function addInterval() {
  setInterval(getBalance, 60000);
}

addInterval();

app.get("/", (req, res) => {
  res.send("Welcome to Ethereum!");
});

app.listen(port, (): void => {
  console.log(`Server is listening on ${port}`);
});

