# Retriving Private State Variable on Swisstronik Network and Polygon Mumbai Network

This challenge given by Swisstronik and Techfiesta demonstrates how private state variables can be retrieved from the blockchain as an on chain transaction. A basic smart contract was developed, having a private state variable and 2 different functions, one to modify the state variable and the other is to get that private value.
From the output after the script is been run on Swisstronik and Polygon Mumbai test networks, it shows the privacy of the two networks. The Swisstronik network returned a _Private_ value from the state variable because of swisstronik additional features such as private EVM execution using Intel SGX.
But for Polygon, despite the state variable been indicated as private, it still outputted the exact value.

#### Screenshot of Result

![unknown_049](https://github.com/jerrymusaga/voting-smart-contract/assets/94830918/071f60f9-e07b-49df-8378-a5609b2878d4)

### [Transaction Hash for Swisstronik Contract Address: ](https://explorer-evm.testnet.swisstronik.com/address/0x6D4caee8eC0CDe3a4a65C10DD3A6E064cD7A211A)

**Swisstronik EVM Contract Address: 0x6D4caee8eC0CDe3a4a65C10DD3A6E064cD7A211A**

### [Transaction Hash for Polygon Contract Address: ](https://mumbai.polygonscan.com/address/0x309d48fc35e3361d8a980e6bd9e481fd131bc90a)

**Polygon Mumbai Contract Address: 0x309D48Fc35e3361D8A980e6BD9e481Fd131bC90A**
