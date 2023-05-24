const express = require("express")
const app = express()


app.get("/", (req, res)=>{
    res.send("home page")
})

app.listen(3000,(req,res)=>{
    console.log("Listenning server port 3000")
})