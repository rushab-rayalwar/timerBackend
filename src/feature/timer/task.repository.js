// third party imports
import mongoose from "mongoose";

// local imports
import Task from "./task.schema.js";

export default class TaskRepository {
    async addNewTask(data){
        let session;
        try{
            session = await mongoose.startSession();
            session.startTransaction();

            let newTask = new Task(data);
            let newDocument = await newTask.save({session});

            await session.commitTransaction();
            return {success:true, data:newDocument, code:201}
        } catch(error) {
            console.log(error);
            if(session && session.inTransaction()){
                await session.abortTransaction();
            }
            return {success:false, error, code:400}
        } finally {
            await session.endSession();
        }
    }
    async deleteAll(){
        let session;
        try{
            session = await mongoose.startSession();
            session.startTransaction();

            let data = await Task.deleteMany({},{session});

            await session.commitTransaction();
            return {success:true, code:200, data}
        } catch(error){
            console.log(error);
            if(session && session.inTransaction()){
                await session.abortTransaction();
            }

            return {success:false, error, code:500}
        } finally {
            if(session){
                await session.endSession();
            }
        }
    }
    async getAllTasks(){
        try{
            let tasks = await Task.aggregate([
                {
                    $sort : {
                        createdAt : 1
                    }
                }
            ]);

            return {success:true, data:tasks, code:200}
        } catch(error){
            return {success:false, error, code:500}
        }
    }
}