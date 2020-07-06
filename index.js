
const dotenv = require("dotenv");
dotenv.config({path :"./config.env"});
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logs every request on the console
const helmet = require('helmet'); // protects http request headers
const middleWares = require('./middlewares'); // our custom middlewares
const users = require('./api/users');

const app = express();

if(process.env.NODE_ENV==="development"){
app.use(morgan('dev'));
}

app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true
}));

const DB= process.env.DATABASE

mongoose.connect(DB,
  { useNewUrlParser: "True",useCreateIndex:"True" ,useUnifiedTopology: "True"}
).catch(error => handleError(error));

mongoose.connection.on("error", err => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.use('/api/users', users);
  
app.use(middleWares.notFound);
app.use(middleWares.erroHandler);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  };

  console.log(`server is listening on ${port}`);
});
