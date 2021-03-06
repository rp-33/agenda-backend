'use strict';

let dotenv = require('dotenv');

dotenv.config();

let configuration = {
	server:{
		port : process.env.SERVER_PORT
	},
 	db:{
 		port: process.env.DB_PORT
 	}
};

module.exports = configuration;
