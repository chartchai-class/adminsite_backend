const {pool} = require("../config/mysqlconfig");

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

  async setBook({
    file,
    book_title,
    category,
    author_name,
    price,
    promo,
    stock,
    date,
    publisher,
    language,
    pages,
    description,
  }) {
    const query =
      "INSERT INTO book(categoryId,bookCover,bookTitle,bookAuthor,description,bookPrice,bookPromo,date,publisher,language,pages,stock) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const results = await this.executeQuery(query, [
      category,
      file,
      book_title,
      author_name,
      description,
      price,
      promo,
      date,
      publisher,
      language,
      pages,
      stock,
    ]);
    return results;
  }

  async getEachBook({ bookId }) {
    const query = "SELECT * FROM book WHERE bookId=?";
    const results = await this.executeQuery(query, [bookId]);
    return results;
  }

  async updateBook({
    file,
    book_title,
    category,
    author_name,
    price,
    promo,
    stock,
    date,
    publisher,
    language,
    pages,
    description,
    bookId,
  }) {
    const query =
      "UPDATE book SET categoryId = ?, bookCover = ?,bookTitle = ?,bookAuthor = ?,description=?, bookPrice = ?,bookPromo = ?, date=?,publisher=?, language=?, pages=?,stock=? WHERE bookID=?";
    const results = await this.executeQuery(query, [
      category,
      file,
      book_title,
      author_name,
      description,
      price,
      promo,
      date,
      publisher,
      language,
      pages,
      stock,
      bookId,
    ]);
    return results;
  }

  async deleteBook({ bookId }) {
    const query = "DELETE FROM book WHERE bookId=?";
    return await this.executeQuery(query, [bookId]);
  }

  async getBookCover({ bookId }) {
    const query = "SELECT bookCover FROM book WHERE bookID =?";
    const results = await this.executeQuery(query, [bookId]);
    return results;
  }

  async bookForEachCategory({ categoryId }) {
    const query =
      "SELECT book.*,category.categoryName FROM book INNER JOIN category ON book.categoryId=category.categoryId  WHERE book.categoryId=?";
    const results = await this.executeQuery(query, [categoryId]);
    return results;
  }
}

module.exports = BookModel;
