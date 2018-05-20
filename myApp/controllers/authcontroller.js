var exports = module.exports = {}

exports.presignup = function(req, res) {
    res.render('presignup.ejs');
}

exports.signup = function(req, res) {
    res.render('signout.ejs');
}

exports.signupAluno = function(req, res) {
    res.render('signout.ejs');
}

exports.signupCorretor = function(req, res) {
    res.render('signout.ejs');
}

exports.signupCoordenador = function(req, res) {
    res.render('signout.ejs');
}

exports.signin = function(req, res) {
    res.render('signin.ejs');
}

exports.dashboard = function(req, res) {

    res.render('dashboard.ejs');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}
