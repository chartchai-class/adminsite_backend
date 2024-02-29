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
    
  };
  Router.get('/billHistory', async (req, res) => {
    const sqlQuery = 'SELECT * FROM bookstore.sale_History';
  
  
    try {
      const pool = dbModule.createPool();
      const connection = await pool.getConnection();
      const [result] = await connection.query(sqlQuery);
  
      const bills = result.map((row) => ({ id: row.billId, billDate: row.billDate , bookId: row.bookId ,quanity: row.quanity ,billPrice: row.billPrice }));

      connection.release();
  
      return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'All Bills', bills));
      
    } catch (err) {
      console.error(err);
      return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.ERROR, 'Internal Server Error'));
    } 
    
  });

  Router.get('/categories', async (req, res) => {
    const sqlQuery = 'SELECT * FROM bookstore.category';
  
  
    try {
      const pool = dbModule.createPool();
      const connection = await pool.getConnection();
      const [result] = await connection.query(sqlQuery);
  
      const categories = result.map((row) => ({ id: row.categoryId, categoryName: row.categoryName }));

      connection.release();
  
      return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'All Categories', categories));
      
    } catch (err) {
      console.error(err);
      return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.ERROR, 'Internal Server Error'));
    } 
    
  });
  Router.get('/books', async (req, res) => {
    const sqlQuery = 'SELECT * FROM bookstore.book';
  
  
    try {
      const pool = dbModule.createPool();
      const connection = await pool.getConnection();
      const [result] = await connection.query(sqlQuery);
      const books = result.map((row) => ({ id: row.bookId, categoryId: row.categoryId ,coverImg: row.coverImg , title: row.title,
       author : row.author, description : row.description , price : row.price , promotionPrice: row.promotion_price,
      releasDate : row.releaseDate, publisher: row.publisher , language : row.language ,page: row.page , stock: row.stock,
      salecount: row.sale_count }));

      connection.release();
  
      return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'All Books', books));
      
    } catch (err) {
      console.error(err);
      return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.ERROR, 'Internal Server Error'));
    } 
    
  });
  

  Router.get('/addBook',  async(req, res) => {
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
