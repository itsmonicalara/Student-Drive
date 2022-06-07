const Reservation = artifacts.require("Reservation");

contract("Reservation", (accounts) => {
  let reservation;
  let expectedRider;

  before(async () => {
    reservation = await Reservation.deployed();
  });

  describe("reserving a car and retrieving account addresses", async () => {
    before("reserve a pet using accounts[0]", async () => {
      await reservation.reserve(8, { from: accounts[0] });
      expectedRider = accounts[0];
    });

    it("can fetch the address of an owner by rider id", async () => {
        const rider = await reservation.riders(8);
        assert.equal(rider, expectedRider, "The rider should be the first account.");
      });
    
    it("can fetch the collection of all riders addresses", async () => {
        const riders = await reservation.getRiders();
        assert.equal(riders[8], expectedRider, "The rider should be in the collection.");
      }); 

    it("can fetch the start of the collection", async () => {
        const riders = await reservation.getRiders();
        assert.equal(riders[0], "0x0000000000000000000000000000000000000000", "The first rider should be empty.");
      });
    
       
  });

});

