// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DoncationTracker{
  mapping(address => uint) public donations;

  function donate() public payable{
    require(msg.value > 0, "Donation must be greater than 0");
    donations[msg.sender] += msg.value;
  }

  function getDonation(address _donor) public view returns(uint){
    return donations[_donor];
  }

function withdraw() public {
  uint amount = donations[msg.sender];
  require(amount > 0, "No donations to withdraw");
  donations[msg.sender] = 0;
  payable(msg.sender).transfer(amount);
}


}