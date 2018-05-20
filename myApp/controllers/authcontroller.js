var exports = module.exports = {}

exports.signup = function(req, res) {

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
