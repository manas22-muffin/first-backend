import express from "express"
import cors from "cors"
import cookieParse from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({     //yeh form bhara kisine toh yeh json mein convert karega
    limit: "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public") //yeh public folder se static files ko serve karega
)
app.use(cookieParse()) //yeh cookies ko parse karega

//routes import
import userRouter from "./routes/user.routes.js"


//routes declaration
app.use("/api/v1/users", userRouter)




export { app }