import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, BigNumber } from "ethers";

describe("Box", async () => {
    let box:Contract;

    beforeEach(async function () {
        const Box = await ethers.getContractFactory("Box");
        const box = await Box.deploy();
        await box.deployed();
    })

    it("Should retrieve value previously stored", async function () {
        await box.store(1);
        expect(await box.retrieve()).to.equal(BigNumber.from(1));

        await box.store(7);
        expect(await box.retrieve()).to.equal(BigNumber.from(7));
    })   
})