// third party imports
import express from "express";
import cors from "cors";

// local imports
import connectToDB from "./src/config/mongoose.config.js";

const server = express();
const port = process.env.PORT || 3200;

server.use(
    cors({
        origin:["http://localhost:5173", "https://rushabs-timer.onrender.com"], // NOTE THIS
        methods:["GET", "POST", "PUT", "DELETE"],
        credentials : true
    })
);

server.listen(port, "0.0.0.0" , ()=>{
    console.log("server is listening on port", port);
    connectToDB();
});

export default server;