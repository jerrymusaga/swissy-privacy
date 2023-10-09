import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const { ALCHEMY_MUMBAI_API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: ALCHEMY_MUMBAI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
