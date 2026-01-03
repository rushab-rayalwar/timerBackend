import "./src/config/dotenvConfig.js";

//third party modules
import express from "express";

// local modules
import server from "./server.js";
import tasksRouter from "./src/feature/timer/task.router.js";

server.use(express.json());

server.get("/",(req,res)=>res.json({message:"Welcome to Timer App's Backend"}));
server.use(tasksRouter);