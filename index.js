const http = require("http");
const app = require("./app")
const {port} = require("./config/keys")

// create a server
const server = http.createServer(app)

//listen to the server
server.listen(port, () =>{
    console.log(`Server is listening on port: ${port}`)
})