
const mysql = require('mysql2');
const dotenv=require('dotenv').config();
console.log(dotenv);



const createPool = () => {
  try {
   
    const mysqlPool = mysql.createPool({
      host     : process.env.RDS_HOSTNAME,
      user     : process.env.RDS_USERNAME,
      password : process.env.RDS_PASSWORD,
      database : 'bookstore',
      port     : process.env.RDS_PORT
    });
    

    return mysqlPool.promise();
  } catch (error) {
    console.error("Not Connected to db",error);
    throw error;
  }
};

module.exports = {
  createPool
};
