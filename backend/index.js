import dotenv from "dotenv";
import mongoose from "mongoose";
// import { Server } from "socket.io";

dotenv.config();
const PORT = process.env.PORT||3001
const URI = process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("mongodb connected");
}
catch(error){
    console.log(error)
}

server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});