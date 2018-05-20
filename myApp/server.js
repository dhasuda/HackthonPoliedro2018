var express = require('express')
var app = express()
var passport = require('passport')
var fileUpload = require('express-fileupload');
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
var mysql = require('mysql'); // Mysql include

var connection = mysql.createConnection({ // Mysql Connection
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'sequelize_passport',
    });


app.use(express.static(__dirname + '/public'));

//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// For file upload
app.use(fileUpload());

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



// app.get('/', function(req, res) {
//
//     res.send('Welcome to Passport with Sequelize');
//
// });

//Models
var models = require("./models");

//Routes

var authRoute = require('./routes/auth.js')(app,passport);
var fileRoute = require('./routes/file.js')(app, models);
var utilsRoute = require('./routes/utils.js')(app);

app.get('/aboutStudent', function(req, res) {
    res.render('dash/aboutStudent.ejs')
});

app.get('/productsStudent', function(req, res) {
    res.render('dash/productsStudent.ejs')
});

app.get('/productsStudent', function(req, res) {
    res.render('dash/productsStudent.ejs')
});

app.get('/storeStudent', function(req, res) {
    res.render('dash/storeStudent.ejs')
});

app.get('/teste', function(req, res) {
    res.render('dash/homeStudent.ejs')
});

//load passport strategies

require('./config/passport/passport.js')(passport, models.user);

//Sync Database

models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')


}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});


app.listen(3000, function(err) {

    if (!err)

        console.log("Site is live");

    else console.log(err)

});
