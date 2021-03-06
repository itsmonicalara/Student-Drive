App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load JSON rides.
    $.getJSON('../rides.json', function(data) {
      var ridesRow = $('#ridesRow');
      var rideTemplate = $('#rideTemplate');

      for (i = 0; i < data.length; i ++) {
        rideTemplate.find('.card-title').text(data[i].user);
        rideTemplate.find('img').attr('src', data[i].picture);
        rideTemplate.find('.ride-startTime').text(data[i].startTime);
        rideTemplate.find('.ride-positions').text(data[i].positions);
        rideTemplate.find('.ride-destination').text(data[i].destination);
        rideTemplate.find('.ride-cost').text(data[i].cost);
        rideTemplate.find('.ride-description').text(data[i].description);
        rideTemplate.find('.btn-reserve').attr('data-id', data[i].cost);
        ridesRow.append(rideTemplate.html());
      }

    });

    // Load Mongo rides.
    var getRides = function() {
      $.ajax({
        url: 'http://localhost:4000/tec-ride/',
        type: 'GET',
        success: function(data) {
          console.log(data);
          var ridesRow = $('#mongoRow');
          var rideTemplate = $('#mongoTemplate');
          for (i = 0; i < data.length; i ++) {
            rideTemplate.find('.title').text(data[i].offerUser);
            rideTemplate.find('img').attr('src', data[i].offerImage);
            rideTemplate.find('.startTime').text(data[i].offerStartTime);
            rideTemplate.find('.positions').text(data[i].offerPositions);
            rideTemplate.find('.destination').text(data[i].offerDestination);
            rideTemplate.find('.cost').text(data[i].offerCost);  
            rideTemplate.find('.description').text(data[i].offerDescription);
            rideTemplate.find('.btn-reserve').attr('data-id', data[i].offerCost);
            ridesRow.append(rideTemplate.html());
          }
        }
      });
    }
    getRides();

    return await App.initWeb3();
  },

  initWeb3: async function() {
      // Modern dapp browsers...
      if (window.ethereum) {
        App.web3Provider = window.ethereum;
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });;
        } catch (error) {
          // User denied account access...
          console.error("User denied account access")
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = window.web3.currentProvider;
      }
      // If no injected web3 instance is detected, fall back to Ganache
      else {
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      web3 = new Web3(App.web3Provider);


    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Reservation.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var ReservationArtifact = data;
      App.contracts.Reservation = TruffleContract(ReservationArtifact);
    
      // Set the provider for our contract
      App.contracts.Reservation.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the booked reservations
      return App.markReserved();
    });
    

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-reserve', App.handleReserve);
  },

  markReserved: function() {
        var reservationInstance;
    
    App.contracts.Reservation.deployed().then(function(instance) {
      reservationInstance = instance;
    
      return reservationInstance.getRiders.call();
    }).then(function(riders) {
      for (i = 0; i < riders.length; i++) {
        if (riders[i] !== '0x0000000000000000000000000000000000000000') {
          $('.card').eq(i).find('button').text('Booked!').attr('disabled', true);
        }
      }
    }).catch(function(err) {
      console.log(err.message);
    });

  },

  handleReserve: function(event) {
    event.preventDefault();

    var driverId = parseInt($(event.target).data('id'));

    var reservationInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Reservation.deployed().then(function(instance) {
    reservationInstance = instance;

    // Execute reservation as a transaction by sending account
    return reservationInstance.reserve(driverId, {from: account});
  }).then(function(result) {
    return App.markReserved();
  }).catch(function(err) {
    console.log(err.message);
  });
});

  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
