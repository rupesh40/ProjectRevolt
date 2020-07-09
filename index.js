const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan"); // logs every request on the console
const helmet = require("helmet"); // protects http request headers
const middleWares = require("./middlewares"); // our custom middlewares
const users = require("./api/users");
const gridStationUse = require("./api/gridStationUse");
const AppError = require("./utilities/appError");
const globalErrorHandler = require("./utilities/errorController");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: "True", useUnifiedTopology: "True" })
  .catch((error) => handleError(error));

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use("/api/users", users);

app.use("/api/gridStation", gridStationUse);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandler);

//app.use(middleWares.notFound);
//app.use(middleWares.erroHandler);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
