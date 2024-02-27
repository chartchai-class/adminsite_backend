const express = require("express");
const Router = express.Router();
Router.use(express.json());
const bodyParser = require ("body-parser");
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));


const dbModule = require('../config/mysqlconfig');
const query = require('../query/bookquery');
const Code = {
    OK: 200,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    // Add other status codes as needed
  };
  const HttpResponse = class {
    constructor(code, status, message, data) {
      this.code = code;
      this.status = status;
      this.message = message;
      this.data = data;
    }
  };
  const Status = {
    OK: 200,
    INTERNAL_SERVER_ERROR: 500,
    // Add other status codes as needed
  };

  Router.get('/add',  async(req, res) => {
    let book = [req.body];
    try {
        const pool = dbModule.createPool();
        const connection = await pool.getConnection();
        const result = await connection.query(query.QUERY.CREATE_BOOK);
        book = { id: result[0].insertId, ...req.body };
        return res.status(Code.CREATED)
          .send(new HttpResponse(Code.CREATED, Status.CREATED, 'Book created', book));
      } catch (error) {
        console.error(error);
        return res.status(Code.INTERNAL_SERVER_ERROR)
          .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
      }

  })
  module.exports = Router;
