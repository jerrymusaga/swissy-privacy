import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

const hre = require("hardhat");
const { ALCHEMY_MUMBAI_API_URL } = process.env;
const SwisstronikRPCProvider = "https://json-rpc.testnet.swisstronik.com/";
const MumbaiAlchemyProvider = ALCHEMY_MUMBAI_API_URL;
const slot = 0;

async function getStrategy(
  configURL: string,
  contractAddress: string,
  slot: number
) {
  const provider: any = new ethers.getDefaultProvider(configURL);

  try {
    const privateState = await provider.getStorageAt(contractAddress, slot);
    console.log(`Hex value:${privateState}`);
    const privateStrategyValue = Buffer.from(
      privateState.slice(2),
      "hex"
    ).toString();

    console.log(`Forex strategy is:  ${privateStrategyValue}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function main() {
  const SwisstronikContractAddress =
    "0x6D4caee8eC0CDe3a4a65C10DD3A6E064cD7A211A";
  const MumbaiContractAddress = "0x309D48Fc35e3361D8A980e6BD9e481Fd131bC90A";
  const configURL = hre.network.config.url;

  if (configURL == SwisstronikRPCProvider) {
    await getStrategy(configURL, SwisstronikContractAddress, slot);
  } else if (configURL == MumbaiAlchemyProvider) {
    await getStrategy(configURL, MumbaiContractAddress, slot);
  } else {
    return;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
