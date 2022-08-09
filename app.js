import express from 'express';
import mongoose from 'mongoose';



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//import user-router here
import router from './routes/User_router'
app.use("/api/user",router)

//import blog-router here
import blogrouter from './routes/Blog_routers';
app.use("/api/blog",blogrouter)



mongoose.connect('mongodb://localhost:27017/Gallery_App').then(()=>{
    console.log('Employee Data connected to LocalHost 5000')
}).catch(err => console.log(err));

app.listen(5000);