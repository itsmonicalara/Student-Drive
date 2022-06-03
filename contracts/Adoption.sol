// "additional information that only the compiler cares about"
pragma solidity ^0.5.0;

contract Adoption {
    // Solidity has a unique type called an address.
    address[16] public adopters;

    // Adopting a pet
    // We are checking to make sure petId is in range of our adopters array.
    function adopt(uint petId) public returns (uint) {
      require(petId >= 0 && petId <= 15);
    
      adopters[petId] = msg.sender;
    
      return petId;
    }

    // Retrieving the adopters
    // The view keyword in the function declaration means that the function will not modify the state of the contract. 
    function getAdopters() public view returns (address[16] memory) {
      return adopters;
    }



    
}

