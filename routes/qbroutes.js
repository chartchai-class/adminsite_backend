const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// for home page showing
router.get("/", adminController.view);
router.get("/categories", adminController.mainCategory);
router.get("/addCategory", adminController.cform);
router.post("/addCategory", adminController.create);
router.get("/updateCate/:id", adminController.update);
router.post("/updateCate/:id", adminController.edit);
router.get("/category/:id", adminController.delete);
// router.get("/categories/:categoryId", adminController.category);

//   .get("/addBook", adminController.form)
//   .post("/addBook", adminController.bcreate)
//   .get("/viewbook/:id", adminController.details)
//   .get("/updatebook/:id", adminController.bupdate)
//   .post("/updatebook/:id", adminController.bedit)
//   .get("/:id", adminController.bdelete);

// router.get("/billHistory", async (req, res) => {
//   const sqlQuery = "SELECT * FROM bookstore.sale_History";

//   try {
//     const pool = dbModule.createPool();
//     const connection = await pool.getConnection();
//     const [result] = await connection.query(sqlQuery);

//     const bills = result.map((row) => ({
//       id: row.billId,
//       billDate: row.billDate,
//       bookId: row.bookId,
//       quanity: row.quanity,
//       billPrice: row.billPrice,
//     }));

//     connection.release();

//     return res
//       .status(Code.OK)
//       .send(new HttpResponse(Code.OK, Status.OK, "All Bills", bills));
//   } catch (err) {
//     console.error(err);
//     return res
//       .status(Code.INTERNAL_SERVER_ERROR)
//       .send(
//         new HttpResponse(
//           Code.INTERNAL_SERVER_ERROR,
//           Status.ERROR,
//           "Internal Server Error"
//         )
//       );
//   }
// });

// router.get("/categories", async (req, res) => {
//   const sqlQuery = "SELECT * FROM bookstore.category";

//   try {
//     const pool = dbModule.createPool();
//     const connection = await pool.getConnection();
//     const [result] = await connection.query(sqlQuery);

//     const categories = result.map((row) => ({
//       id: row.categoryId,
//       categoryName: row.categoryName,
//     }));

//     connection.release();

//     return res
//       .status(Code.OK)
//       .send(new HttpResponse(Code.OK, Status.OK, "All Categories", categories));
//   } catch (err) {
//     console.error(err);
//     return res
//       .status(Code.INTERNAL_SERVER_ERROR)
//       .send(
//         new HttpResponse(
//           Code.INTERNAL_SERVER_ERROR,
//           Status.ERROR,
//           "Internal Server Error"
//         )
//       );
//   }
// });
// router.get("/books", async (req, res) => {
//   const sqlQuery = "SELECT * FROM bookstore.book";

//   try {
//     const pool = dbModule.createPool();
//     const connection = await pool.getConnection();
//     const [result] = await connection.query(sqlQuery);
//     const books = result.map((row) => ({
//       id: row.bookId,
//       categoryId: row.categoryId,
//       coverImg: row.coverImg,
//       title: row.title,
//       author: row.author,
//       description: row.description,
//       price: row.price,
//       promotionPrice: row.promotion_price,
//       releasDate: row.releaseDate,
//       publisher: row.publisher,
//       language: row.language,
//       page: row.page,
//       stock: row.stock,
//       salecount: row.sale_count,
//     }));

//     connection.release();

//     return res
//       .status(Code.OK)
//       .send(new HttpResponse(Code.OK, Status.OK, "All Books", books));
//   } catch (err) {
//     console.error(err);
//     return res
//       .status(Code.INTERNAL_SERVER_ERROR)
//       .send(
//         new HttpResponse(
//           Code.INTERNAL_SERVER_ERROR,
//           Status.ERROR,
//           "Internal Server Error"
//         )
//       );
//   }
// });

// router.get("/addBook", async (req, res) => {
//   let book = [req.body];
//   try {
//     const pool = dbModule.createPool();
//     const connection = await pool.getConnection();
//     const result = await connection.query(query.QUERY.CREATE_BOOK);
//     book = { id: result[0].insertId, ...req.body };
//     return res
//       .status(Code.CREATED)
//       .send(
//         new HttpResponse(Code.CREATED, Status.CREATED, "Book created", book)
//       );
//   } catch (error) {
//     console.error(error);
//     return res
//       .status(Code.INTERNAL_SERVER_ERROR)
//       .send(
//         new HttpResponse(
//           Code.INTERNAL_SERVER_ERROR,
//           Status.INTERNAL_SERVER_ERROR,
//           "An error occurred"
//         )
//       );
//   }
// });
module.exports = router;
