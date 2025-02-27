// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator{
  uint number;
  function add(uint a) public{
    number += a;
  }
  function subtract(uint a) public{
    number -= a;
  }
  function multiply(uint a) public{
    number *= a;
  }
  function getNumber() public view returns(uint){
    return number;
}
}