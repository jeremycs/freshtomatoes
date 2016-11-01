module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movie', {
    movie_name: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    rating: DataTypes.STRING,
    description: DataTypes.TEXT,
  });
};
