const { Pool } = require('pg')
require('dotenv').config()

const connection = new Pool({
    connectionString: process.env.URL_DATABASE
})

module.exports = connection;