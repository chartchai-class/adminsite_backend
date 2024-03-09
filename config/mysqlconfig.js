const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  port: process.env.RDS_RDS_PORT,
  database: process.env.RDS_NAME,
  password: process.env.RDS_PASSWORD,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (!err) {
    console.log("Connected to database");
  } else {
    console.log("Connection failed! ", err.message);
  }
});

module.exports = pool;
