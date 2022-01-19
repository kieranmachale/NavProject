const express = require('express');
const cors = require('cors');
const server = express();
const port = process.env.PORT || 3000;

let corsOptions = {
    origin: '*'
}
server.use(cors(corsOptions));

server.get("/test", (req, res) => {
    res.send('Hello JSFiddle!').status(200);
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});