pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";


contract WantMarketplacesToken is ERC20Detailed, ERC20Capped, ERC20Burnable {
  
  constructor(
        string memory _name,
	string memory _symbol,
	uint8 _decimals,
        uint256 _totalSupply
  ) 
    ERC20Detailed(_name, _symbol, _decimals)
    ERC20Capped(_totalSupply)
    public
  {
  }
}
