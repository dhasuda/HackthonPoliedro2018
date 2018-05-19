var express = require('express')
var app = express()


app.get("/", function (req, res) {
  res.render("login/login.ejs")
})

app.get("/login", function(req, res) {
  var username = req.body.username
  var password = req.body.pass
})

app.listen(3000)
