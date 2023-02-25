import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
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

// app.get("/user", (req, res) => {
//     res.send("hello user")
   
// })
app.get("/", (req, res) => {
    res.send("hello first request!")
   
})


app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((req,res,next)=>{
    console.log("hi I'm a middleware!")
})
//lắng nghe ở port 5000: ở đây cho bất cứ port nào cũng được, miễn là chưa có ứng dụng nào khác chạy
app.listen(5000, ()=> {
    connect()
    console.log("Connect to backend.");
})