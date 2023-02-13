import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB.")
      } catch (error) {
        throw error;
    }
}


mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

//lắng nghe ở port 5000: ở đây cho bất cứ port nào cũng được, miễn là chưa có ứng dụng nào khác chạy
app.listen(5000, ()=> {
    connect()
    console.log("Connect to backend.");
})