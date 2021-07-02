// import package
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

// import utils, middleware, configs file
const { notFoundRoute, errHandler } = require("./middlewares/error.middleware");
const { PORT } = require("./configs/env");
const connectDb = require("./utils/db");

const app = express();
connectDb();

// middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));

// import routes
const userRoute = require("./routes/user.route");

// use routes
app.use("/user", userRoute);

// handle error
app.use(notFoundRoute);
app.use(errHandler);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
