angular.module('canteen.messageFactory', [])

.factory('messageFactory', [
  '$http',
  function ($http) {
    function getMessages(tripId) {
      return $http({
        method: 'GET',
        url: '/api/messages/' + tripId
      })
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    function addMessage(message, tripId) {
      return $http({
        method: 'POST',
        url: '/api/messages/' + tripId,
        data: message
      })
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    // function getTrip() {
    //   return $http({
    //     method: 'GET',
    //     url: '/api/trip',
    //   })
    //   .then(function (resp) {
    //     if(!resp.data._id){
    //       $location.path('/#/landing-page');
    //       window.location.reload(true);
    //     }
    //     return resp.data;
    //   })
    //   .catch(function (err) {
    //     console.error(err);
    //   });
    // }

    // function updateStatus(trip) {
    //   return $http({
    //     method: 'PUT',
    //     url: '/api/trip/',
    //     data: trip,
    //   })
    //   .then(function (resp) {
    //     return resp.data;
    //   })
    //   .catch(function (err) {
    //     console.error(err);
    //   });
    // }

    // Factory methods use promises
    return {
      getMessages: getMessages,
      addMessage: addMessage
    };
  },
]);
