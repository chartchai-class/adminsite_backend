const {pool} = require("../config/mysqlconfig");

class BillHistoryModel {
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
  async getAllBills() {
    const query = "SELECT * FROM bookstore.sale_History";
    const results = await this.executeQuery(query);
    return results;
  } 

}
module.exports = BillHistoryModel;