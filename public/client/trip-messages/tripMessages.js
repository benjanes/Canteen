angular.module('canteen.tripMessages', [])

.controller('tripMessages', [
  '$scope',
  function ($scope, trip) {
    $scope.messages = [
      {
        username : 'Ben',
        createdAt : 'Tuesday',
        message : 'Hello there'
      },
      {
        username : 'Wendy',
        createdAt : 'Friday',
        message : 'Come on over, come on over baby'
      }
    ];
  }
]);