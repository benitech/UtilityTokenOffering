const WantMarketplacesUtilityToken = artifacts.require('./UtilityToken/WantMarketplacesUtilityToken.sol');
const web3 = require("web3-utils");
const ether = (n) => new web3.BigNumber(web3.toWei(n, 'ether'));

module.exports = function(deployer, network, accounts) {

    //Token Details
    const name = "WANT Marketplaces Utility Token";
    const symbol = "WNTU";
    const decimals = 18;
    const totalSupply = web3.toWei("100000000", "ether");

    //Deploying Wallet
    const wallet = accounts[0];

return deployer
        //Deploy Token
        .then(() => {
            return deployer.deploy(WantMarketplacesUtilityToken, name, symbol, decimals, totalSupply);
        })
};

