import mongoose from "mongoose";

const url = process.env.DB_URL;

export default async function connectToDB(){
    try{
        await mongoose.connect(url);
        console.log("Connected to the DB");
    } catch(error){
        console.error(error);
        process.exit(1); // NOTE THIS
    }
}