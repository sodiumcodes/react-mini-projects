import 'dotenv/config'
import 'colors'
import app from "./src/app.js";
import Connection from "./src/configs/db.js"
import ApiError from "./src/utils/ApiError.js"
import mongoose from 'mongoose';

//using ayncHandler is not very useful because is designed for Express route handlers and middleware
//here req, res, next all three become undefined as this function sodesnot have any thus throwing an error

let server;
const startServer = async()=>{
  try {
    console.log("Starting Server:".bgBlue);
    //db
    await Connection();
    console.log("\nConnected to Database Successfully.".bgGreen);
    server = app.listen(process.env.PORT, ()=>{
        console.log("\nServer Conection Established Successfully.".bgGreen);
    })
    //server
  }
  catch (error) {
    if(error instanceof mongoose.Error){
        console.log("\nError in Connecting to DB.".bgRed);
        ApiError(500,error);
    }
    else{
        console.log("\nError in Connecting to Server.".bgRed);
        ApiError(500,error);
    }
  }  
}

const stopServer = async()=>{
  try {
    console.log("\nStopping Server:".red);
    await mongoose.disconnect();
    console.log("\nDB disconnected successfully.".bgGreen);
    server.close(()=>{
        console.log("\nServer is closed.".bgGreen);
        process.exit(0);
    });
    
  } catch (error) {
    if(error instanceof mongoose.error){
        console.log("\nError in Disconnecting the DB.".bgRed);
        ApiError(500,error);
    }
    else{
        console.log("\nError in Disconnecting the Server.".bgRed);
        ApiError(500,error);
    }
  }  
}

process.on("SIGINT", stopServer);
process.on("SIGNTERM", stopServer);
startServer();