const express = require("express");
const app = express();
const PORT = 8001;

const path = require("path");

const cookieParser = require("cookie-parser");

const staticRoute = require("./routes/staticRouter");

const urlRoute = require("./routes/url");

const userRoute = require("./routes/user");

const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

//Db connection
const { connectMongoDb } = require("./connection");
connectMongoDb("mongodb://127.0.0.1:27017/shortUrl").then(
  console.log("MongoDB connected")
);

//imp to render views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));


//routes
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
