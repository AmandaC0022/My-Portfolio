const mysql = require('mysql');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: DB_USER,
    password: DB_PW,
    database: DB_NAME,
  },
  console.log('Connected to the database.')
);

module.exports = db; 