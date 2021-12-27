require("dotenv").config();

const server = require("./API/server");

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
