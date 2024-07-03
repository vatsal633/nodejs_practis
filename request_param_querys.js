const express = require('express')
const app = express()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/home', (req, res) => {
    res.send('hello home,express js')
})

app.get('/about', (req, res) => {
    res.send('hello about,express js')
})

 
app.get('/blog', (req, res) => {
    res.send('hello blog,express js')

})
app.listen(port, () => {
    console.log(`example app listenin port ${port}`)
})
