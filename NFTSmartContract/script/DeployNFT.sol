// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/MyNFT.sol";

contract DeployNFT is Script {
    function run() external {
        string memory name = "My Collection";
        string memory symbol = "MYC";

        vm.startBroadcast();
        MyNFT nft = new MyNFT(name, symbol);
        vm.stopBroadcast();

        console.log("NFT Contract deployed at:", address(nft));
    }
}
