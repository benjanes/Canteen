var canteenIO = require('socket.io');

module.exports = function(server) {
  var io = canteenIO.listen(server);

  io.sockets.on('connection', function (socket) {
    socket.emit('canteen-msg', { msg : 'hello canteen' });
  });

  return io;
};