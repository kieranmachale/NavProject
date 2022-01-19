const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 3000;

// cors settings
let corsOptions = {
    origin: '*'
}
server.use(cors(corsOptions));

server.get("/test", (req, res) => {
    res.send('Hello JSFiddle!').status(200);
})

/* Start server */
server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = server;