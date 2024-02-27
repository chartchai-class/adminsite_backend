
const mysql = require('mysql2');


const createPool = () => {
  try {
   
    const mysqlPool = mysql.createPool({
      connectionLimit: 10,
      host: '172.24.0.1',
      user: 'root',
      password: 'admin-password',
      database: 'bookstore',
      port: 3307,
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
