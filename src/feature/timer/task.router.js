// third party imports
import express from "express";

// local imports
import TaskController from "./task.controller.js";

const tasksRouter = express.Router();
const controller = new TaskController();

tasksRouter.get("/",(req,res)=>controller.getAllTasks(req,res));
tasksRouter.post("/",(req,res)=>controller.addNewTask(req,res));
tasksRouter.delete("/",(req,res)=>controller.deleteAll(req,res));

export default tasksRouter;