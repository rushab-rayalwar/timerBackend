import TaskRepository from "./task.repository.js";

export default class TaskController {
    constructor(){
        this.repository = new TaskRepository();
    }

    async getAllTasks(req,res){
        let tasks = await this.repository.getAllTasks();
        if(tasks.success){
            return res.statusCode(tasks.code).json({success:true, data:tasks.data})
        } else {
            return res.statusCode(tasks.code).json({success:false, error:tasks.error})
        }
    }
    async addNewTask(req,res){
        let data = req.body;
        let result= await this.repository.addNewTask(data);
        if(result.success){
            return res.statusCode(result.code).json({success:true, data})
        } else {
            return res.statusCode(result.code).json({success:false, error})
        }
    }
    async deleteAll(req,res){
        let result= await this.repository.addNewTask(data);
        if(result.success){
            return res.statusCode(result.code).json({success:true, data})
        } else {
            return res.statusCode(result.code).json({success:false, error})
        }
    }
}