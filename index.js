import "./src/config/dotenvConfig.js";

//third party modules
import express from "express";
import cors from "cors";

// local modules
import server from "./server.js";
import tasksRouter from "./src/feature/timer/task.router.js";

server.use(
    cors({
        origin:["http://localhost:5173", "https://rushabs-timer.onrender.com/"],
        methods:["GET", "POST", "PUT", "DELETE"],
        credentials : true
    })
);
server.use(express.json());

server.get("/",(req,res)=>res.json({message:"Welcome to Timer App's Backend"}));
server.use("/api/task",tasksRouter);