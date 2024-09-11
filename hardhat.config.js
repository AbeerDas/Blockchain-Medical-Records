require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS ? process.env.PRIVATE_KEYS.split(',') : [];
const sepoliaApiKey = process.env.SEPOLIA_API_URL;

console.log("Private Keys:", privateKeys);
console.log("Sepolia API Key:", sepoliaApiKey);

module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    sepolia: {
      url: sepoliaApiKey,
      accounts: privateKeys,
    },
  },
};
