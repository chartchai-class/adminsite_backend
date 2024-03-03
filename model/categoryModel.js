const pool = require("../config/mysqlconfig");

class CategoryModel {
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
  async getAllCategories() {
    const query = "SELECT * FROM category";
    const results = await this.executeQuery(query);
    return results;
  }
  async setCategory({ categoryName }) {
    const query = "INSERT INTO category SET categoryName=?";
    const results = await this.executeQuery(query, [categoryName]);
    return results;
  }
}

module.exports = CategoryModel;
