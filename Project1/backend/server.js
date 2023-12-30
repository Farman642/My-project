const express =require('express');
require('dotenv').config()
const connectDB = require('./config/db')
const userRouter = require('./routes/user')

const app = express();

const port = process.env.PORT || 4001;

connectDB()

app.use(express.json({extended:false}))
app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})