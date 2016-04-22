angular.module('canteen.socketFactory', [])

.factory('Socket', [
  'socketFactory',
  function(socketFactory) {
    var mainSocket = socketFactory();
    return mainSocket;
  }
]);
