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
app,use(cookieParse()) //yeh cookies ko parse karega

// suppose koi url se kuch request kiya toh usko resposne bhejne se phle hum check krenge ki wo valid user hai(user logged in hai ki nai) ki nhi like credentials dekhenge ,toh uss beeche ki checking ko hi middleware bolte hain
// middleware ka use hum request ko process karne se pehle kuch aur karne ke liye karte hain(next use krke)

export { app }