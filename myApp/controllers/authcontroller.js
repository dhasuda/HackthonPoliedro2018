var exports = module.exports = {}

exports.presignup = function(req, res) {
    res.render('presignup.ejs');
}

exports.signup = function(req, res) {
    res.render('login/sign_up.ejs');
}

exports.signupAluno = function(req, res) {
    res.render('login/sign_upAluno.ejs');
}

exports.signupCorretor = function(req, res) {
    res.render('login/sign_upCorretor.ejs');
}

exports.signupCoordenador = function(req, res) {
    res.render('login/sign_upCoordenador.ejs');
}

exports.signin = function(req, res) {
    res.render('login/login.ejs');
}

exports.dashboard = function(req, res) {

    if (req.user.role == "aluno") {
      // res.send("sou um aluno")
      res.render('dash/homeStudent.ejs')
    }
    else if (req.user.role == "corretor") {
      res.render("dash/homeTeacher.ejs")
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
