import "./src/config/dotenvConfig.js";

//third party modules
import express from "express";
import cors from "cors";

// local modules
import server from "./server.js";
import tasksRouter from "./src/feature/timer/task.router.js";

server.use(express.json());

server.get("/",(req,res,next)=>res.json({message:"Welcome to Timer App's Backend"}));
server.use("/api/task",tasksRouter);

server.use((req,res,next)=>{
    res.status(404).json({success:false, error:"Invalid URL"});
});

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error: err.message || "Internal Server Error"
    });
});