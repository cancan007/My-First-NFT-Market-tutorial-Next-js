require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

const projectId = "eddf33a15d4f4ff4ab95db615d52fcb4";
const privateKey = fs.readFileSync('.secret').toString()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
