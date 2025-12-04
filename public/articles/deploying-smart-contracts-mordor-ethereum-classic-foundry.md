---
title: "Deploying Smart Contracts on Mordor and Ethereum Classic Using Foundry"
author: "Kanishk Sogani"
date: "2025-03-17"
image: "/images/deploying-smart-contracts-using-foundry.webp"
excerpt: "Guide: deploying smart contracts on Mordor and Ethereum Classic using Foundry."
---

# Deploying Smart Contracts on Mordor and Ethereum Classic Using Foundry

Ethereum Classic is the original EVM-compatible blockchain and its community of miners, developers and users remain committed to the original principles of blockchains, which include immutability, unstoppability and permissionlessness. These characteristics make Ethereum Classic a great option if you are seeking a stable, mature and time-tested blockchain for your project.

If you want to deploy smart contracts on Mordor or Ethereum Classic using Foundry, there are specific configurations you need to apply to ensure a smooth deployment. This guide walks you through the necessary steps to deploy your contract successfully on both Mordor (testnet) and Ethereum Classic (mainnet).

## Prerequisites

Before proceeding, ensure you have:

- Foundry installed on your system
- A smart contract ready for deployment
- A deployment script (use your own or the example provided below)
- A wallet with test ETC for Mordor or real ETC for Ethereum Classic

If you’re using a different framework (such as Hardhat or Truffle), be sure to check for specific deployment considerations, as newer versions might cause compatibility issues.

## Getting Test ETC for Mordor

To deploy smart contracts on Mordor, you will need test ETC (Ethereum Classic’s testnet currency).

How to get test ETC?
You can obtain test ETC from Mordor faucets. Simply search online for “Mordor testnet faucet” to find available sources that distribute test ETC.

Make sure you use a reputable faucet and verify the network settings before requesting test ETC.

Once you have received test ETC, you can proceed with deployment.

## Configuring Foundry for Mordor & Ethereum Classic

By default, Foundry uses evm_version = “cancun”, which includes post-merge opcodes (such as TSTORE and TLOAD). However, Mordor and Ethereum Classic operate on pre-merge EVM versions (likely Byzantium or Istanbul). Using an unsupported EVM version can result in transaction failures with status: 0 errors.

To avoid this, update your Foundry configuration file:

## Update foundry.toml
Modify your foundry.toml file to set evm_version to “paris”:

```
[profile.default]
src = “src”
out = “out”
libs = [“lib”]
evm_version = “paris” # Ensures compatibility with Mordor & Ethereum Classic
```

After updating, verify the EVM version by running:

```
forge config
```

Ensure the output displays evm_version = “paris”.

## Setting Up Mordor & Ethereum Classic RPC

Mordor is a testnet for Ethereum Classic, while Ethereum Classic itself is the mainnet. To connect Foundry to either network, add the respective RPC URLs to your .env file:

```
MORDOR_RPC_URL=https://rpc.mordor.etccooperative.org
ETC_RPC_URL=https://etc.rivet.link
```

## Compiling the Smart Contract

Before deploying, clean and rebuild your project to ensure no residual issues:

```
forge clean
forge build
```

## Deploying the Smart Contract

If you already have a deployment script, you can reuse it. Otherwise, create a Deploy.s.sol script in the script/ directory using the following example:

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "forge-std/Script.sol";
import "../src/YourContract.sol";
contract DeployContract is Script {
 function setUp() public {}
 function run() external {
 vm.startBroadcast();
 
 // Deploy your contract
 YourContract contractInstance = new YourContract();
 //Replace with your contract
vm.stopBroadcast();
 console.log("Contract deployed at:", address(contractInstance));
 }
}

```

Replace **YourContract** with the name of your actual contract file.

### Deploying to Mordor

Run the deployment script with:

```
forge script script/Deploy.s.sol:DeployContract \
 --rpc-url $MORDOR_RPC_URL \
 --private-key $PRIVATE_KEY \
 --broadcast \
 --evm_version paris \
 --legacy
```

### Deploying to Ethereum Classic

Run the deployment script with:

```
forge script script/Deploy.s.sol:DeployContract \
 --rpc-url $ETC_RPC_URL \
 --private-key $PRIVATE_KEY \
 --broadcast \
 --evm_version paris \
 --legacy
+ ```

 Make sure you have PRIVATE_KEY set in your .env file before running the deployment script.

### Why We Use — legacy

Ethereum Classic and Mordor do not support EIP-1559 transactions. If you attempt to use EIP-1559-based transactions, you may encounter the following error:

Failed to get EIP-1559 fees; unsupported feature: eip1559

To resolve this, we use the — legacy flag, which forces Foundry to use legacy-style transactions instead of EIP-1559. This ensures compatibility with networks that do not support priority fees or dynamic gas pricing.

## Checking Deployment & Adding Networks

You can verify your contract deployment and add the respective networks to your wallet using the following links:

### Block Explorers to check deployment:

- [Mordor Explorer](https://etc-mordor.blockscout.com/)
- [Ethereum Classic Explorer](https://etc.blockscout.com/)

### Chainlist to Add Networks:
- [Chainlist to Add Networks:](https://chainlist.org/?search=mordor&testnets=true)
- [Add Ethereum Classic to Wallet](https://chainlist.org/?search=etc)

## Conclusion

By following these steps, you can successfully deploy smart contracts on both Mordor and Ethereum Classic using Foundry. Ensuring the correct EVM version and handling legacy transactions appropriately will help prevent common deployment issues.
