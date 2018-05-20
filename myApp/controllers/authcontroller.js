var exports = module.exports = {}

exports.presignup = function(req, res) {
    res.render('presignup.ejs');
}

exports.signup = function(req, res) {
    res.render('signout.ejs');
}

exports.signupAluno = function(req, res) {
    res.render('signupAluno.ejs');
}

exports.signupCorretor = function(req, res) {
    res.render('signupCorretor.ejs');
}

exports.signupCoordenador = function(req, res) {
    res.render('signupCoordenador.ejs');
}

exports.signin = function(req, res) {
    res.render('signin.ejs');
}

exports.dashboard = function(req, res) {

    if (req.user.role == "aluno") {
      // res.send("sou um aluno")
      res.render('dashboardAluno.ejs')
    }
    else if (req.user.role == "corretor") {
      res.send("Sou um corretor")
    }
    else if (req.user.role == "coordenador") {
      res.send("Sou um coordenador")
    }
    else {
      res.render('dashboard.ejs');
    }

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}
