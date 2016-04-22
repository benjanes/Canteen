angular.module('canteen.tripMessages', [])

.controller('tripMessages', [
  '$scope',
  'messageFactory',
  'Socket',
  function ($scope, messageFactory, Socket) {
    $scope.messageForm = {};
    $scope.messages = [];

    $scope.$watch('trip', function() {
      if ($scope.trip) {
        messageFactory.getMessages($scope.trip._id)
        .then(function (messages) {
          $scope.messages = messages;
        });
      }
    });

    $scope.submitMessage = function (isValid) {
      if (isValid) {
        messageFactory.addMessage($scope.messageForm, $scope.trip._id)
        .then(function (response) {
          return;
        });
      }
    };
  }
]);