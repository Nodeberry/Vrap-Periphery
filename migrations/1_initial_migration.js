const Router = artifacts.require("VrapRouter02");

const factoryContract = "<FACTORY CONTRACT ADDRESS>";

const wBNB = "0xae13d989dac2f0debff460ac112a837c89baa7cd";

module.exports = function (deployer) {
  deployer.deploy(Router, factoryContract, wBNB);
};
