const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: '0310',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
});