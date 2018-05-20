

module.exports = function(app, models) {

  app.post('/uploadComposition', function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
        filename = sampleFile.name;
        console.log("############## USER RM = " + req.user.email)

        filename = req.user.email + "&&" + req.body.week + "&&" + req.body.type + ".png";
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./compositions/' +  filename, function(err) {
      if (err)
        return res.status(500).send(err);

        var data = {
            type: req.body.type,
            week: req.body.week,
            archive: filename,
            grade: -1
        };

      var Composition = models.composition
      Composition.create(data)

      res.send('File uploaded!');
    });
  });

}
