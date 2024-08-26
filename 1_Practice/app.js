const express = require('express')   // Importing the express

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("<h2>Home Page</h2>");
})

app.get('/about', (req, res) => {
    res.send("<h2>About Page</h2>")
})

app.listen(port, () =>{
    console.log(`App listening on port: ${port}`)
})