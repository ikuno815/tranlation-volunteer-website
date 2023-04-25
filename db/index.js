// const knex = require('knex');
// const knexConfigs = require("../knexfile");

// module.exports = knex(knexConfigs[process.env.NODE_ENV]);


const knex = require("knex");
const knexConfig = require("../knexfile")[process.env.NODE_ENV];
console.log(process.env.NODE_ENV);

module.exports = knex(knexConfig);

