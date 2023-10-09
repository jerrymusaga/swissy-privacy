// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SwissyPrivacy {
    string private forex_strategy;
 
    constructor(string memory _forex_strategy) payable{
        forex_strategy = _forex_strategy;
    }

    function setStrategy(string memory _forex_strategy) public {
        forex_strategy = _forex_strategy;
    }

    function getStrategy() public view returns(string memory){
        return forex_strategy;
    }
}