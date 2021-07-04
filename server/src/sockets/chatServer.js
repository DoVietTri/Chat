
const chatServer = (io) => {
  io.on('connection', socket => {
    console.log(socket.handshake.query.userId);
  });
}

module.exports = chatServer;
