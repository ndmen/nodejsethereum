"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var Web3 = require("web3");
const fs = require("fs");
const dotenv = require("dotenv");
const app = (0, express_1.default)();
const port = 3000;
const web3 = new Web3("https://cloudflare-eth.com");
require('dotenv').config();
// CHECK VALID ADDRESS
function isAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const checkIsAddress = yield web3.utils.isAddress(process.env.ADDRESS);
        console.log(checkIsAddress);
        return checkIsAddress;
    });
}
isAddress();
// CHECK BALANCE
function getBalance() {
    return __awaiter(this, void 0, void 0, function* () {
        const getBalanceAddress = yield setInterval(() => web3.eth.getBalance(process.env.ADDRESS).then(console.log), 10000);
        return getBalanceAddress;
    });
}
getBalance();
// ADD BALANCE TO FILE
function addLog() {
    return __awaiter(this, void 0, void 0, function* () {
        fs.appendFileSync("log.txt", "Hello world!\n");
        console.log("Text added!");
    });
}
addLog();
app.get("/", (req, res) => {
    res.send("Hello Ethereum!");
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map