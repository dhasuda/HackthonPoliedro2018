module.exports = function(app) {

  app.get('/utils/:ita', function(req, res) {

      var file = __dirname + '/../utils/' + req.params.ita + '.docx';
      // res.send(req.params.ita)
      res.download(file);
  });

}
