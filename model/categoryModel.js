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

  async getEachCategory({ categoryId }) {
    const query = "SELECT * FROM category WHERE categoryId=?";
    const results = await this.executeQuery(query, [categoryId]);
    return results;
  }

  async updateCategory({ categoryName, categoryId }) {
    const query = "UPDATE category SET categoryName=? WHERE categoryId=?";
    const results = await this.executeQuery(query, [categoryName, categoryId]);
    return results;
  }

  async deleteCategory({ categoryId }) {
    const query = "DELETE FROM category WHERE categoryId=?";
    return await this.executeQuery(query, [categoryId]);
  }
}

module.exports = CategoryModel;
