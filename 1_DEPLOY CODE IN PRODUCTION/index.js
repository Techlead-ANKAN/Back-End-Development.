require('dotenv').config()

const express = require('express')   // Importing the express

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("ankan_twitter.com");
})

app.get('/login', (req, res) => {
    res.send("<h1>This is the login page.</h1>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Youtube Page.</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})