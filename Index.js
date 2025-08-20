const express = require('express')

const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/',(req,res) => {
  res.send('Home page routes ')
})
const todoRoutes = require('./routes/todo')

app.use('/api/v1',todoRoutes)

app.listen(port,()=>{
  console.log(`server on listen port no:${port}`);
  
})

const dbconnect = require('./Config/database')
dbconnect()