const CategoryModel = require("../model/categoryModel");
const BookModel = require("../model/bookModel");

// const BookModel = require("../model/bookModel");

const categoryModel = new CategoryModel();
const bookModel = new BookModel();



//view all for all categories
exports.mainCategory = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.render("main-category", { categories });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.view = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const books = await bookModel.getAllBooks();
    res.render("index", { categories, books });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.cform = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.render("add-category", { alert: null, categories });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.create = async (req, res) => {
  const { categoryName } = req.body;
  try {
    await categoryModel.setCategory({ categoryName });
    const categories = await categoryModel.getAllCategories();
    res.render("add-category", {
      alert: "Category added successfully",
      categories,
    });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  try {
    const categories = await categoryModel.getEachCategory({ categoryId: id });
    res.render("edit-category", {
      alert: null,
      categories,
    });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.edit = async (req, res) => {
  const { categoryName } = req.body;
  const { id } = req.params;
  try {
    await categoryModel.updateCategory({ categoryName, categoryId: id });
    const categories = await categoryModel.getEachCategory({ categoryId: id });
    res.render("edit-category", {
      alert: "Category name has updated",
      categories,
    });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await categoryModel.deleteCategory({ categoryId: id });
    res.redirect("/categories");
  } catch (err) {
    console.error("Error", err);
  }
};

exports.form = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.render("add-book", { alert: null, categories });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.bcreate = async (req, res) => {
  const file = req.files && req.files.file ? req.files.file.name : null;

  if (file != null) {
    uploadPath = "./upload/" + file;
    req.files.file.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
  }
  const {
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
  } = req.body;

  try {
    await bookModel.setBook({
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
    });
    const categories = await categoryModel.getAllCategories();
    res.render("add-book", {
      alert: "Book added successfully",
      categories,
    });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.bupdate = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await bookModel.getEachBook({ bookId: id });
    const categories = await categoryModel.getAllCategories();
    res.render("edit-book", { categories, books, alert: null });
  } catch (err) {
    console.error("Error", err);
  }
};

exports.bedit = async (req, res) => {
  const {
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
  } = req.body;
  const { id } = req.params;
  let file = req.files && req.files.file ? req.files.file.name : null;

  if (file != null) {
    uploadPath = "./upload/" + file;
    req.files.file.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
    });
    try {
      await bookModel.updateBook({
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
        bookId: id,
      });
      const books = await bookModel.getEachBook({
        bookId: id,
      });
      const categories = await categoryModel.getAllCategories();
      res.render("edit-book", {
        books,
        categories,
        alert: "Updated Successfully",
      });
    } catch (err) {
      console.error("Error", err);
    }
  } else {
    const bookCovers = await bookModel.getBookCover({ bookId: id });
    file = bookCovers[0].bookCover;
    try {
      await bookModel.updateBook({
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
        bookId: id,
      });
      const books = await bookModel.getEachBook({
        bookId: id,
      });
      const categories = await categoryModel.getAllCategories();
      res.render("edit-book", {
        books,
        categories,
        alert: "Updated Successfully",
      });
    } catch (err) {
      console.error("Error", err);
    }
  }
};

exports.bdelete = async (req, res) => {
  const { id } = req.params;
  try {
    await bookModel.deleteBook({ bookId: id });
    res.redirect("/");
  } catch (err) {
    console.error("Error", err);
  }
};

exports.category = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    const categoryId = parseInt(req.params.categoryId);
    const category = categories.find(
      (category) => category.categoryId === categoryId
    );
    const categoryName = category.categoryName;
    const books = await bookModel.bookForEachCategory({ categoryId });
    res.render("category-details", { categories, books, categoryName });
  } catch (err) {
    console.error("Error", err);
  }
};
