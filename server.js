const express = require("express");
require("dotenv").config();
const jsxEngine = require("jsx-view-engine");
const mongoose = require("mongoose");
const Logs = require("./models/logs");
const methodOverride = require("method-override");

//^ ======= Variables
const app = express();
const PORT = 3000;

//^ ======== App Config
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//^ ======= Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
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
    const logs = await Logs.find({});
    res.render("Index", { logs });
  } catch (e) {
    console.log(e);
  }
});

/**
 *  ^ Show
 */
app.get("/logs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const log = await Logs.findById(id);
    res.render("Show", { log });
  } catch (e) {
    console.log(e);
  }
});

/**
 * ^ Delete
 */
app.delete("/logs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Logs.findByIdAndDelete(id);
    res.redirect("/logs");
  } catch (e) {
    console.log(e);
  }
});

/**
 * ^ Edit
 */
app.get("/logs/:id/edit", async (req, res) => {
    const { id } = req.params;
    try {
        const log = await Logs.findById(id);
        res.render("Edit", { log });
    } catch (error) {
        console.log(error);
    }
})

/**
 * ^ Update
 */
app.put("/logs/:id", async (req, res) => {
    const { id } = req.params;
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    try {
      await Logs.findByIdAndUpdate(id, req.body, {
        new: true, //add this so it displys the updated post
      });
      res.redirect(`/logs/${id}`);
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
