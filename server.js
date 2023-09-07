const express = require('express');
// require ('dotenv').config();
const jsxEngine = require("jsx-view-engine")

//^ ======= Variables
const app = express()
const PORT = 3000

//^ ======== App Config
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

//^ ======= Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json()) 

//^ ==== Routes
/**
 * Root
 */
app.get("/", (req, res) => {
    res.send('Working')
})

/**
 * ^ New
 */
app.get("/logs/new", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    res.render('New')
})

/**
 * ^ Create
 */
app.post("/logs", (req, res) => {
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})