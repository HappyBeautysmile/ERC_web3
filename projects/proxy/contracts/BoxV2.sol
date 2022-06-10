// SDPX-License-Indentifier: MIT

pragma solidity 0.8.4;

import "./Box.sol";

contract BoxV2 is Box {
    function increment() public {
        store(retrieve() + 1);
    }
}
