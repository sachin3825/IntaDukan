const Web3 = require("web3");

const walletA = {
    address: "0xe4750ae911fb972cea83e5c96791cb7acc2b6bb0",
    privateKey: "0e20a8acdfc20ffd8e2955eb73c1b11283a5877c7aea567fbdc6175c52114c5c"
}

const walletB = {
    address: "0x00950d65f2cc7ad902cc8914f35b2df1e6eb873f",
    privateKey: "0xa7c0659fa2b565f6dd9d5c59b95fda0f8366c9a26f87952cdabacdebac48ef0f"
}

function sendEth(fromAddress, toAddress, privateKey, amount) {
    const web3 = new Web3("wss://still-cosmopolitan-wind.ethereum-sepolia.discover.quiknode.pro/3d4ef22f2bd31c9794625e3974aec8beb81ed4af/");

    let transaction = {
        from: fromAddress,
        to: toAddress,
        gas: web3.utils.toHex(21000),
        value: web3.utils.toHex(web3.utils.toWei(amount, "ether"))
    }

    const signTx = new Promise((resolve, reject) => {
        resolve(web3.eth.accounts.signTransaction(transaction, privateKey));
    })

    signTx.then(signedTx => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
            if (!error) {
                console.log("Transaction Hash: ", hash);
            }
            else {
                console.log("Error: ", error);
            }
        });
    });
}

sendEth(fromAddress = walletA.address, toAddress = walletB.address, privateKey = walletA.privateKey, amount = "0.05");