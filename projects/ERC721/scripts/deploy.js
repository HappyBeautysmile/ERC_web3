const { ethers } = require("hardhat")

async function main() {
  console.log("📝 Compiling smart contract...")
  const NFT = await ethers.getContractFactory("NFT");
  console.log("🚀 Deploying smart contract...")
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("🎉 Smart contract deloyed to: ", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
