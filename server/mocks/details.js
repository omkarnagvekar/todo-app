/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var detailsRouter = express.Router();

  detailsRouter.get('/', function(req, res) {
    res.send({
      'details': [{
          id: 1,
          inputText: "Test message for data binding",
          emailId: 'abc.def@gmail.com',
          phone: '7896541230',
          url: 'https://www.google.com'
      }]
    });
  });

  detailsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  detailsRouter.get('/:id', function(req, res) {
    res.send({
      'details': {
        id: req.params.id
      }
    });
  });

  detailsRouter.put('/:id', function(req, res) {
    res.send({
      'details': {
        id: req.params.id
      }
    });
  });

  detailsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/details', require('body-parser'));
  app.use('/api/details', detailsRouter);
};
