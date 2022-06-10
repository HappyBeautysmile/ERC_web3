import { ethers } from "hardhat";
import { upgrades } from "hardhat";

async function main () {

    const Box = await ethers.getContractFactory("Box");
    console.log("📝 Deploying Box....");
    const box = await upgrades.deployProxy(Box,[1], {initializer: "store" })

    console.log(box.address, "Box(proxy) address: ");
    console.log(await upgrades.erc1967.getImplementationAddress(box.address), "getImplementationAddress");
    console.log(await upgrades.erc1967.getAdminAddress(box.address), "getAdminAddress");
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1;
})
