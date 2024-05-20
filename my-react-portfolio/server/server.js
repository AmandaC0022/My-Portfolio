const mysql = require('mysql');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'portfolio',
    database: 'portfolio_db',
  },
  console.log('Connected to the portfolio_db database.')
);

module.exports = db; 