// third party imports
import express from "express";

// local imports
import connectToDB from "./src/config/mongoose.config.js";

const server = express();
const port = process.env.PORT || 3200;

server.listen(port, "0.0.0.0" , ()=>{
    console.log("server is listening on port", port);
    connectToDB();
});

export default server;