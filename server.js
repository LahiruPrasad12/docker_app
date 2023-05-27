const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const todoRoute = require('./routes/todo_route');

const app = express()
app.use(express.json());

console.log(process.env.PORT)
const port = process.env.PORT || 3000
const URL = process.env.DB_URL
console.log(URL)


app.get('/', (req,res)=>{
    res.send('Hello World')
})

const base = '/api/v1'

app.use(`${base}/todo`, todoRoute);

app.all("*", (req, res, next) => {
    res.send(`Can't find ${req.originalUrl} on this server!`, 404);
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

mongoose
    .connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!'));

