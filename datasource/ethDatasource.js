const { RESTDataSource } = require("apollo-datasource-rest"); 
// Imports RESTDataSource from apollo-datasource-rest package

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; 
// Defines a constant eth_address variable with Vitalik's address 

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {

  constructor() {
    super(); 
    // Calls parent RESTDataSource constructor

    this.baseURL = "https://api.etherscan.io/api";
    // Sets base URL for API requests  
  }

  async etherBalanceByAddress() {
    // Fetches Ether balance for the eth_address
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async totalSupplyOfEther() {
   // Fetches total supply of Ether in the Ethereum network
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Additional API endpoints 
  
  async getLatestEthereumPrice() {
   // Gets latest ETH price
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async getBlockConfirmationTime() {
    // Estimates block confirmation time 
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
