angular.module('canteen.tripMessages', [])

.controller('tripMessages', [
  '$scope',
  'messageFactory',
  function ($scope, messageFactory) {
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

    // messageFactory.getMessages($scope.trip._id)
    // .then(function (messages) {
    //   $scope.messages = messages;
    // });

    // $scope.submitMessage = function (isValid) {
    //   if (isValid) {
    //     console.log('got a valid message on our hands');
    //   }
    // };
  }
]);