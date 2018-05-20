var express = require('express')
var app = express()

var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')

var env = require('dotenv').load()

// For bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// For passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get("/", function (req, res) {
  res.render("login/login.ejs")
})

app.get("/login", function(req, res) {
  var username = req.body.username
  var password = req.body.pass
})

app.listen(3000)
