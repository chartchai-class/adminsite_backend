const pool = require("../config/mysqlconfig");

class BookModel {
  executeQuery(query, params) {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  async getAllBooks() {
    const query = "SELECT * FROM book";
    const results = await this.executeQuery(query);
    return results;
  }
}

module.exports = BookModel;
