const express = require('require')

const app = express
const PORT = 3000


app.get("/logs/new", (req, res) => {
    res.render('New')
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})