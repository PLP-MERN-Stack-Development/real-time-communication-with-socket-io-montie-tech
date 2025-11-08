// Load environment variables
require('dotenv').config();

const express = require('express');
const http = require('http');
const cors = require('cors');
const setupSocket = require('./socket'); // ✅ ensure ./socket/index.js exists as shown before

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Socket.io Chat Server is running 🚀');
});

// Initialize Socket.io
setupSocket(server);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
