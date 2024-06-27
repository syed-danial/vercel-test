const mysql = require('mysql2/promise');

// Configure MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID:', connection.threadId);
});

// Example query
connection.query('SELECT NOW()', (err, results, fields) => {
  if (err) {
    console.error('Error querying MySQL:', err.stack);
    return;
  }
  console.log('Result:', results);
});

// Close MySQL connection
connection.end();
