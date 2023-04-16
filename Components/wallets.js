const cw = require("crypto-wallets");

const walletA = cw.generateWallet("ETH");
const walletB = cw.generateWallet("ETH");

console.log("Wallet A: ", walletA);
console.log("Wallet B: ", walletB);