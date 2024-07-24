require("dotenv").config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile',(req,res)=>{res.send("<h1>I am Touseef</h1> <p>A Full Stack Web Developer</p>")})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})