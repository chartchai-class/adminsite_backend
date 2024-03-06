const express = require("express");
const Router = express.Router();
Router.use(express.json());
const bodyParser = require ("body-parser");
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));
const methodOverride=require('method-override');
Router.use(methodOverride('_method'));

const dbModule = require('../config/mysqlconfig');
const query = require('../query/bookquery');
const Code = {
    OK: 200,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    // Add other status codes as needed
  };

  Router.get('/billHistory',async(req,res)=>{
    const sqlQuery =  'SELECT * FROM bookstore.sale_History';

    const pool = dbModule.createPool();
    const connection = await pool.getConnection();
    const result = await connection.query(sqlQuery, (err) => {
        if (err) throw err
    })
    console.log(result);

  })

  Router.get('/category',async(req,res)=>{
    const sqlQuery =  'SELECT * FROM bookstore.category';

    const pool = dbModule.createPool();
    const connection = await pool.getConnection();
    const result = await connection.query(sqlQuery, (err) => {
        if (err) throw err
    })
    console.log(result);

  })
  Router.get('/add',async(req,res)=>{
    const sqlQuery =  `INSERT INTO bookstore.book(categoryId, coverImg, title, author, description, price, promotion_price, releaseDate, publisher, language, page, stock, sale_count)
    VALUES (2, "https://1.bp.blogspot.com/-HRRu6dw6FTI/UiGGOYfeeII/AAAAAAAAAV4/aLFjY4lAAXkpQzVzVrmi0Nicu-kNwqeKwCPcB/s1600/german.jpg", "something", "me", "description", 23.7, 0, '2022-02-13', "publisher", "en", 34, 20, 0)`;
    
    const pool = dbModule.createPool();
    const connection = await pool.getConnection();
    const result = await connection.query(sqlQuery, (err) => {
        if (err) throw err
    })
    console.log(result);

  })



