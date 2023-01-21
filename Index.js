// requiring expresss

const express = require('express')
const app = express()


// to invoke below url
// http://localhost:3000/
app.get('/', function (req, res) {
    res.send('Hello World')
})

// to invoke below url
// http://localhost:3000/login
app.get('/login', function (req, res) {
    res.send('this is log in page')
})
app.get('/home', function (req, res) {
    res.send('this is home page')
})
app.get('/dashboard', function (req, res) {
    res.send('this is dashboard page')
})

app.listen(3000)

// to invoke above url
// http://localhost:3000/
console.log("on")