import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes.js";

//route declaration 
app.use("/api/v1/users", userRouter)


/*
learning purpose 
// app.post("/register",(req,res)=>{
//     console.log("Hello from code")
//     console.log("req", req.body?.username)
//     console.log("req", req.body?.password)
//     return res.send(`Hello ${req.body?.username}, registration successfully`)
// })

// app.get("/anil", (req, res) => {
//     console.log("req", req);
//     console.log("hello from server");
//     return res.send("i am god")
// })
*/



// http://localhost:8000/api/v1/users/register
export { app }
