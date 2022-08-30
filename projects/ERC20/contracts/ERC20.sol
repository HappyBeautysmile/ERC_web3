// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GTokens {
    constructor(string memory _name, string memory _symbol)
        ERC20("GTokens", "GT")
    {
        _mint(msg.sender, 10 * 10**18);
    }
}
