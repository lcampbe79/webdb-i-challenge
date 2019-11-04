const knex = require('knex');

const configOptions = require('../knexfile').development;

module.exports = knex(configOptions);

// const knex = require('knex');

// const config = require('../knexfile.js');

// module.exports = knex(config.development);