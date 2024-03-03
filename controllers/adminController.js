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
  } catch (error) {
    console.error("Error", err);
  }
};

exports.cform = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.render("add-category", { alert: null, categories });
  } catch (error) {
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
  } catch (error) {
    console.error("Error", err);
  }
};
