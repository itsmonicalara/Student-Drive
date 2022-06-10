// "additional information that only the compiler cares about"
pragma solidity ^0.5.0;

contract Reservation {
    // Solidity has a unique type called an address.
    address[16] public riders;

    // Reserving a ride
    // We are checking to make sure driverId is in range of our rider array.
    function reserve(uint driverId) public returns (uint) {
      require(driverId >= 0 && driverId <= 15);
    
      riders[driverId] = msg.sender;
    
      return driverId;
    }

    // Retrieving the rider
    // The view keyword in the function declaration means that the function will not modify the state of the contract. 
    function getRiders() public view returns (address[16] memory) {
      return riders;
    }

    // Cancelling a ride
    // We are checking to make sure driverId is in range of our rider array.
    // function cancel(uint driverId) public returns (uint) {
    //   require(driverId >= 0 && driverId <= 15);
    
    //   riders[driverId] = 0;
    
    //   return driverId;
    // }

    // // Checking if a driver is reserved
    // // The view keyword in the function declaration means that the function will not modify the state of the contract.
    // function isReserved(uint driverId) public view returns (bool) {
    //   return riders[driverId] != 0;
    // }

    

    
}

