import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

async function main() {
    console.log("Original Box(proxy) address: ", proxyAddress);
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("📝 Upgrade to BoxV2...");
    const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    console.log(boxV2.address, " BoxV2 address(should be the same)");

    console.log(await upgrades.erc1967.getImplementationAddress(boxV2.address), " getImplementationAddress");
    console.log(await upgrades.erc1967.getAdminAddress(boxV2.address), " getAdminAddress");
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1;
})