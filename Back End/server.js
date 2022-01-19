const express = require('express');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 3000;

// cors settings
let corsOptions = {
    origin: '*'
}
server.use(cors(corsOptions));

// Endpoint to check server is active
server.get("/", cors(), (req, res) => {
    res.json('Server is running!').status(200);
})

/* Start server */
server.listen(port, () => {
    console.log(`Server running on port: ${PORT}`);
});

module.exports = server;