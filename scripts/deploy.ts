import { ethers } from "hardhat";
import { SwissyPrivacy__factory } from "../typechain-types";

const strategyOption: string = "ICT (Inner Cycle Trader)";

async function main() {
  const ContractFactory = await ethers.deployContract("SwissyPrivacy", [
    strategyOption,
  ]);
  const contract = await ContractFactory.deployed();
  console.log(
    `Swissy-Privacy gets deployed at address: ${
      (await contract.deployTransaction.wait()).contractAddress
    }`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
