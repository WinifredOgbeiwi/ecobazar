import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.routes.js";
dotenv.config()
connectDB();

const app = express();
const port = process.env.PORT || 9989;
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
res.send("Hello world")
});

app.listen(port, (req,res)=>{
 console.log(`LISTENING ${port}`)
})

