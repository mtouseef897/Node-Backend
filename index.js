require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({message:"Welcome to SmartWebHouse Backend"})
})

app.get('/profile',(req,res)=>{res.json({name:"Touseef",profession:"web developer"})})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})