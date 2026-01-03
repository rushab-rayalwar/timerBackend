import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName : {
        type : String,
        required:[true, "Task-name is required."]
    },
    startTime : { // milliseconds
        type : Number,
        required : [true, "Start-time is required"]
    },
    endTime : { // milliseconds
        type: Number,
        required : [true, "End-time is required"]
    },
    duration : { // seconds
        type: Number,
        required : [true,"Duration of the task is required"]
    }
},{timestamps:true});

const Task = mongoose.model('Task', taskSchema);

export default Task;