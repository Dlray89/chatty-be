require('dotenv').config();


const server = require('./API/server')

const port = 8080;
server.listen(port, () => console.log('server is up!!'))