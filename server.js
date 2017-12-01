var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var jwt = require('jwt-simple')
var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var app = express()

var User = require('./models/User')
// var Post = require('./models/Post')

app.use(cors())
app.use(bodyParser.json())

app.get('/users', async (req, res)=>{
    try {
        // var users = await User.find({}, '-password -__v' )
        var users = await User.find({})
        res.send(users)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.get('/test', (req, res)=>{
    res.send('Hello, i m in hero')
})

// app.listen(8080)

mongoose.connect('mongodb://mgafur:456123@ds115166.mlab.com:15166/mpos', {useMongoClient: true}, (err) => {
    if (!err) {
        console.log('connect to db')
    } else {
        console.log('Terjadi kesalahan')
    }
})

app.listen(process.env.PORT || 8080, ()=> console.log('ok'))
