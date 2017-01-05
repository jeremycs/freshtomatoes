var config    = require('config');
var Sequelize = require('sequelize');
var logger    = require('../common/logger');

var sequelize = new Sequelize(config.database.dbDatabase, config.database.dbUser, config.database.dbPassword, {
  host: config.database.dbServer,
  port: config.database.dbPort,
  dialect: config.database.dbDialect,
  logging: logger.debug,
  pool: { maxConnections: 15, maxIdleTime: 30}
});

sequelize
  .authenticate()
  .then(function(err) {
    if (err) {
      logger.error('Unable to connect to the database:', err);
    } else {
      logger.debug('Models/index reports: connection to db "' + config.database.dbDatabase + '" successful');
    }
  });

var models = {
  Movie: sequelize.import(__dirname + '/../models/movie'),
};

models.sequelize = sequelize;

module.exports = models;
