const express = require("express");
require("dotenv").config();
const jsxEngine = require("jsx-view-engine");
const mongoose = require("mongoose");
const Logs = require("./models/logs");

//^ ======= Variables
const app = express();
const PORT = 3000;

//^ ======== App Config
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//^ ======= Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//^ ==== Routes
/**
 * Root
 */
app.get("/", (req, res) => {
  res.send("Working");
});

/**
 * ^ New
 */
app.get("/logs/new", (req, res) => {
  res.render("New");
});

/**
 * ^ Create
 */
app.post("/logs", async (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  //   res.send(req.body);

  try {
    const createdLog = await Logs.create(req.body);
    console.log(createdLog);
    res.redirect("/logs");
  } catch (error) {
    console.log(error);
  }
});

/**
 * ^ Index
 */
app.get("/logs", async (req, res) => {
    try {
        const logs = await Logs.find({})
        res.render("Index", { logs });
    } catch (e) {
        console.log(e);
    }
});

//^ Listening and connecting to DB
mongoose.connect(process.env.MONGO_URI);

//~check for a connection with db
const db = mongoose.connection;
db.on("error", (e) => console.log(e));
db.on("open", () => console.log("Connected to MongoDB"));
db.on("close", () => console.log("MongoDB disconnected"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
