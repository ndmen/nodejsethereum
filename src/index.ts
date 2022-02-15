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

// CHECK BALANCE

async function getBalance() {
  const getBalanceAddress = await setInterval(() => web3.eth.getBalance(
    process.env.ADDRESS).then(console.log), 60000);
    return getBalanceAddress;
}

getBalance();

// ADD BALANCE TO FILE

async function addLog() {
  fs.appendFileSync("log.txt", "Balance: \n");
  console.log("Balance added!"); 
}

addLog();

app.get("/", (req, res) => {
  res.send("Welcome to Ethereum!");
});

app.listen(port, (): void => {
  console.log(`Server is listening on ${port}`);
});

