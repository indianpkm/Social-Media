import express from 'express'
import bodyParser from 'body-parser'
import Connection from './database/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
const PORT=5000;

//Routes

const app=express();

// to serve image
app.use(express.static('public'))
app.use('/images',express.static("images"))

//middleWare

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
Connection();

app.listen(PORT,()=>{
    console.log('server start ')
})

//uses of routes
app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)