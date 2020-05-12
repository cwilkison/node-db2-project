const knex = require('knex');
const knexfile = require('../knexfile.js');

const environment = process.env.NODE_ENV || "development"; // undefined|production //DONT COMPELETLY UNDERSTAND THIS LINE


module.exports = knex(knexfile[environment]);