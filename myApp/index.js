var express = require('express')
var app = express()


app.get("/", function (req, res) {
  res.render("login.html")
})

app.get("/login", function(req, res) {
  var rm = req.body.rm
  var 
})

app.listen(3000)
