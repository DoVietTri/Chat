const chatServer = require('./chatServer');

const rootSocket = (io) => {
  chatServer(io)
}

module.exports = rootSocket;