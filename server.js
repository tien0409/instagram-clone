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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// handle error
app.use(notFoundRoute);
app.use(errHandler);

const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

require("./socket")(server);
