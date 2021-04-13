const HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const ADMIN_KEY = "";
const ETHERSCAN_KEY = "";

const privateKey = [ADMIN_KEY];

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: ETHERSCAN_KEY,
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    testnet: {
      provider: () =>
        new HDWalletProvider(
          privateKey,
          `https://data-seed-prebsc-2-s3.binance.org:8545/`
        ),
      network_id: 97, // BSC Testnet's id
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      // evmVersion: "byzantium",
      // }
    },
  },

  db: {
    enabled: false,
  },
};
