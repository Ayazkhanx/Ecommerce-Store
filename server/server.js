const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cokieeParser = require('cookie-parser')
const cors = require('cors')


const PORT = process.env.PORT || 8080

MongoUrl = 'mongodb+srv://ak96979590:wcSGu9b8o1uQ3E0T@shoppingapp.c4whx.mongodb.net/'

const connectToDb = () => {
    mongoose.connect(MongoUrl)
       .then(() => console.log('MongoDB Connected...'))
       .catch(err => console.log(err));
}
connectToDb()

app.use(express.json())
app.use(cokieeParser())
app.use(cors({
    origin: 'http://localhost:5173',
    method: ['POST', 'PUT', 'DELETE', 'GET'],
    allowHeaders: [
        'Content-type', 
        'Authorization',
        'Cache-control',
        'Expires',
        'Pragma',
    ],
    credentials: true
    
}))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})