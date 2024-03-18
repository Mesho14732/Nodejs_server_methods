const http = require(`http`);
const fs = require (`fs`);
const path = require (`path`);
const bookdbpath = path.join(__dirname, "db", `book.json`);
const PORT = 5000;
const PORTNAME = `localhost`;

const server = http.createServer();




server.listen(PORT, PORTNAME, ()=> {
  console.log (`Server is running on http://${PORTNAME}:${PORT}`);
})