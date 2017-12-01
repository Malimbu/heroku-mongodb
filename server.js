var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var jwt = require('jwt-simple')
var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/test', (req, res)=>{
    res.send('Hello, i m in hero')
})

// app.listen(8080)
app.listen(process.env.PORT || 8080, ()=> console.log('ok'))
