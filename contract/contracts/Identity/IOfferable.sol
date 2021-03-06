// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4 <=0.9.0;


interface IOfferable {
  function offer(address _offeredTo) external;

  function acceptOffer() external;

  function rejectOffer() external;

  function cancelOffer() external;

  function sendTransaction(address to, bytes memory data, uint256 value)
    external
    returns (bool success);
}
