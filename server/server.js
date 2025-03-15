import express from 'express';
const app = express();
import mongoose from 'mongoose';


const PORT = 8080


const connectToDb = (req, res) => {
    mongoose.connect('mongodb://localhost:27017/mydatabase')
       .then(() => console.log('MongoDB Connected...'))
       .catch(err => console.log(err));

}
connectToDb()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})