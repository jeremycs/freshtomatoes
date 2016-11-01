/* External libraries */
var config          = require('config');
var express         = require('express');
var expressWinston  = require('express-winston');
var bodyParser      = require('body-parser');
var _				= require('lodash');
var cors 			= require('cors')

/* Project libraries */
var logger      = require('./common/logger');
var sequelize   = require('./models').sequelize;
var MovieRouter	= require('./routes/movie-routes');

var app = express();
var movieRouter = MovieRouter();

/* ORM table sync up */
sequelize.sync().then(function () {
  logger.debug('db init sync success');
}).error(function(err) {
	logger.debug('db init sync error: '+err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', config.port || 3200);

// * Use express-winston middleware for express route logging
app.use(expressWinston.logger({
  transports: _.values(logger.transports),
  winstonInstance: logger
}));

// * Use express-winston middleware for express route error logging
app.use(expressWinston.errorLogger({
  transports: _.values(logger.transports),
  winstonInstance: logger
}));

movieRouter.addRoutes(app);

app.listen(app.get('port'), function() {
  logger.info('freshtomatoes API listening on port ' + app.get('port'));
});
