const express = require('express')
const dotenv=require("dotenv").config()

const app = express()
const PORT = process.env.PORT||5000
const mongoDB=require("./db")
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin",`${process.env.FRONTEND_URL}`);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json()) 
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/Display"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})