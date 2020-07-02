const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logs every request on the console
const helmet = require('helmet'); // protects http request headers
const middleWares = require('./middlewares'); // our custom middlewares

const users = require('./api/users');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/admin",
  {  useCreateIndex: true, useNewUrlParser: "true" ,useUnifiedTopology: true}
).catch(error => handleError(error));

mongoose.connection.on("error", err => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});



app.get('/', (request, response) => {
  response.send('Hello  ');
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


