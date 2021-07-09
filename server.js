// import package
require("dotenv").config();
const express = require("express");
const cors = require("cors");
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
app.use(cors());

// import routes
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const conversationRoute = require("./routes/conversation.route");
const messageRoute = require("./routes/message.route");

// use routes
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);

// handle error
app.use(notFoundRoute);
app.use(errHandler);

const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

require("./socket")(server);
