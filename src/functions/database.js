const logger = require('./logger');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
	host: `${process.env.DB_HOST}`,
	dialect: `${process.env.DB_TYPE}`,
	storage: 'database.sqlite',
	logging: logger.debug,
});
exports.sequelize = sequelize;

const Images = sequelize.define('images', {
	url: {
		type: Sequelize.STRING(1000),
		unique: true,
	},
	rating: Sequelize.STRING,
	user: Sequelize.STRING,
});
exports.Images = Images;
