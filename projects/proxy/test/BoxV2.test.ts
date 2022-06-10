import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("BoxV2", function () {
  let boxV2:Contract;

  beforeEach(async function () {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    boxV2 = await BoxV2.deploy()
    await boxV2.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await boxV2.store(1)
    expect(await boxV2.retrieve()).to.equal(BigNumber.from('1'))

    await boxV2.store(7)
    expect(await boxV2.retrieve()).to.equal(BigNumber.from('7'))
  })

  it("Should increment value correctly", async function () {
      await boxV2.store(1);
      await boxV2.increment();
      expect(await boxV2.retrieve()).to.equal(BigNumber.from("2"));
  })
})