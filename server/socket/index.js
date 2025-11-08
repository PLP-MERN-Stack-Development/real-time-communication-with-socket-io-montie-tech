const { Server } = require('socket.io');

function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: '*', // update this to your React app's URL later
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🟢 User connected: ${socket.id}`);

    // Handle incoming chat messages
    socket.on('chatMessage', (data) => {
      io.emit('chatMessage', data); // broadcast to all clients
    });

    socket.on('disconnect', () => {
      console.log(`🔴 User disconnected: ${socket.id}`);
    });
  });
}

module.exports = setupSocket;
