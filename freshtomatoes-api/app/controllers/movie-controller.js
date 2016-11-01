var config      = require('config');
var logger      = require('../common/logger.js');
var Movie       = require('../models').Movie;
var sequelize   = require('../models').sequelize;

/* Export exposed functions */
module.exports = function() {

  module.retrieveMovies = function(callback) {
    Movie.findAll().then(function(movies) {
      callback({
        success: true,
        movies: movies
      });
    }).error(function(err) {
      logger.error(err);
      callback({
        success: false,
        message: err.message,
      });
    });
  }

  module.createMovie = function(movieName, imageUrl, rating, description, callback) {
    Movie.create({
      movie_name: movieName,
      image_url: imageUrl,
      rating: rating,
      description: description,
    }).then(function(movie) {
      callback({
        succes: true,
        movie: movie
      });
    }).error(function(err) {
      logger.error(err);
      callback({
        success: false,
        message: err.message,
      });
    });
  }

  module.updateMovie = function(id, movieName, imageUrl, rating, description, callback) {
    Movie.findOne({where: {id: id}}).then(function(movie) {
      if (!movie) {
        logger.error('Movie with id not found: ' + id);
        callback({
          success: false,
          message: 'Movie with id not found: ' + id,
        });
        return;
      }

      movie.updateAttributes({
        movie_name: movieName,
        image_url: imageUrl,
        rating: rating,
        description: description,
      }).then(function() {
        callback({
          success: true,
          message: 'updated movie with id: ' + id,
        });
      }).error(function(err) {
        logger.error(err);
        callback({
          success: false,
          message: err.message,
        });
      });

    }).error(function(err) {
      logger.error(err);
      callback({
        success: false,
        message: err.message,
      });
    });
  }

  module.deleteMovie = function(id, callback) {
    sequelize.query('delete from movies where id = \'' + id + '\'').then(function() {
      callback({
        success: true,
        message: 'deleted movie with id: ' + id,
      });
    }).error(function(err) {
      logger.error(err);
      callback({
        success: false,
        message: err.message,
      });
    });
  }

  return module;
};
