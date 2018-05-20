var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/',authController.presignup);

    app.get('/logout',authController.logout);

    app.get('/dashboard',isLoggedIn, authController.dashboard);

    app.get('/signup', authController.signup);

    app.get('/signupAluno', authController.signupAluno);

    app.get('/signupCorretor', authController.signupCorretor);

    app.get('/signupCoordenador', authController.signupCoordenador);

    app.get('/signin', authController.signin);

    app.get('/', authController.presignup);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',

            failureRedirect: '/'
        }

    ));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/'
    }

    ));

}

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}
