var config             = require('config');
var express            = require('express');
var MovieController    = require('../controllers/movie-controller');

module.exports = function() {

  var movieController = MovieController();
  var router          = express.Router();

  module.addRoutes = function(app) {

    // get all movies
    router.get('/movie', function(req, res) {
      movieController.retrieveMovies(function(payload) {
        res.json(payload);
      });
    });

    // create new movie
    router.post('/movie', function(req, res) {
      if (!req.query || !req.query.movieName || !req.query.imageUrl || !req.query.rating || !req.query.description) {
        res.json({
          success: false,
          message: 'missing fields',
        });
        return;
      }

      movieController.createMovie(req.query.movieName, req.query.imageUrl, req.query.rating, req.query.description, function(payload) {
        res.json(payload);
      });
    });

    // update existing movie
    router.put('/movie/:id', function(req, res) {
      if (!req.query || !req.params.id || !req.query.movieName || !req.query.imageUrl || !req.query.rating || !req.query.description) {
        res.json({
          success: false,
          message: 'missing fields',
        });
        return;
      }

      movieController.updateMovie(req.params.id, req.query.movieName, req.query.imageUrl, req.query.rating, req.query.description, function(payload) {
        res.json(payload);
      });
    });

    // delete existing movie
    router.delete('/movie/:id', function(req, res) {
      if (!req.query || !req.params.id) {
        res.json({
          success: false,
          message: 'missing fields',
        });
        return;
      }

      movieController.deleteMovie(req.params.id, function(payload) {
        res.json(payload);
      });
    });

    app.use('/', router);
  };

  return module;
}
