

module.exports = function(app, models) {

  app.get('/getStudentCompositions', function(req, res) {

    var Composition = models.composition

    Composition.findAll({
        where: {
            studentEmail: req.user.email
        }
    }).then(function(composition) {

        if (!composition) {
          return res.send("Not found")
        }
        res.send(composition)
    }).catch(function(err) {

        console.log("Error:", err);

    });

  });

  app.get('/getCorrectorCompositions', function(req, res) {

    var Composition = models.composition

    Composition.findAll({
        where: {
            correctorEmail: req.user.email
        }
    }).then(function(composition) {

        if (!composition) {
          return res.send("Not found")
        }
        res.send(composition)
    }).catch(function(err) {

        console.log("Error:", err);

    });

  });

  app.get('/getNotCorrectedFromUnit', function(req, res) {

    var Composition = models.composition

    Composition.findAll({
        where: {
            status: 'notCorrected',
            about: req.user.about
        }
    }).then(function(composition) {

        if (!composition) {
          return res.send("Not found")
        }
        res.send(composition)



    }).catch(function(err) {
        console.log("Error:", err);
    });

  });

  app.post('/uploadCorrection', function(req, res) {
    var Composition = models.composition

    Composition.findOne({
        where: {
            studentEmail: req.body.email,
            type: req.body.type,
            week: req.body.week
        }
    }).then(function(composition) {

        if (!composition) {
          return res.send("Not found")
        }

        composition.status = 'corrected';
        composition.grade = req.body.grade;
        composition.grade1 = req.body.grade1;
        composition.grade2 = req.body.grade2;
        composition.grade3 = req.body.grade3;
        composition.grade4 = req.body.grade4;
        composition.grade5 = req.body.grade5;
        composition.comments = req.body.comments;
        composition.save()

        let sampleFile = req.files.sampleFile;
            filename = sampleFile.name;
            filename = req.user.email + "&&" + req.body.week + "&&" + req.body.type + ".png";

        sampleFile.mv('./compositions/' +  filename, function(err) {
          if (err)
            return res.status(500).send(err);
        });

        res.send("Sended")

    }).catch(function(err) {
        console.log("Error:", err);
    });
  });

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
            studentEmail: req.user.email,
            about: req.user.about,
            grade: -1
        };

      var Composition = models.composition
      Composition.create(data)

      res.send('File uploaded!');
    });
  });

  app.post('/uploadCompositionForStudent', function(req, res) {
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
            studentEmail: req.body.studentRm,
            type: req.body.type,
            week: req.body.week,
            archive: filename,
            studentEmail: req.user.email,
            about: req.user.about,
            grade: -1
        };

      var Composition = models.composition
      Composition.create(data)

      res.send('File uploaded!');
    });
  });

  app.post('/assignCorrectors', function(req, res) {

    var Composition = models.composition

    Composition.findAll({
        where: {
            status: 'notCorrected',
            about: req.user.about,
            week: req.body.week
        }
    }).then(function(composition) {

        if (!composition) {
          return res.send("Not found")
        }

        composition.forEach(function(u) {
            u.correctorEmail = req.body.correctorEmail;
            u.save(function (err) {
            })
        });
        res.send('Saved')

    }).catch(function(err) {
        console.log("Error:", err);
    });

  });

}
