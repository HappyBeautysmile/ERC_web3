// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Box {
    uint256 private value;

    // Emitted when thee value has changes
    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
