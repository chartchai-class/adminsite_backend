const {pool} = require("../config/mysqlconfig");

class UserModel {
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
  async getAllUsers() {
    const query = "SELECT * FROM user";
    const results = await this.executeQuery(query);
    return results;
  }
  async getUserByUserName(username) {
    const query = `SELECT * FROM user WHERE username = ?`;
    const results = await this.executeQuery(query, [username]);
    console.log("results:", results);
    return results;
}

}
module.exports = UserModel;