// Add methods to bootstrap the application
// refer : https://www.youtube.com/watch?v=TlB_eWDSMt4
const mongoose = require('mongoose');
const express = require('express');
const bodyParser =require('body-parser');
const app = express();


app.get('/', (request, response) => {
  response.send('Hello  ');
});

app.get('/api/user',(req,res)=>{
    res.send("hello from another route");});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  };

  console.log(`server is listening on ${port}`);
});

mongoose.connect("mongodb://localhost:27017/testdb",{useNewUrlParser:"True"}).catch(error => handleError(error));

mongoose.connection.on("error",err=>{
    console.log("err",err);
});

mongoose.connection.on("connected",(err,res)=>{
    console.log("mongoose is connected");

})

