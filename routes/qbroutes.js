const express = require("express");

const router = express.Router();
const adminController = require("../controllers/adminController");

// for home page showing

router.get("/", adminController.login);
router.post("/", adminController.handleLogin);
router.get("/main", adminController.view);
router.get("/categories", adminController.mainCategory);
router.get("/addCategory", adminController.cform);
router.post("/addCategory", adminController.create);
router.get("/updateCate/:id", adminController.update);
router.post("/updateCate/:id", adminController.edit);
router.get("/category/:id", adminController.delete);
router.get("/categories/:categoryId", adminController.category);
router.get("/billHistory", adminController.billHistory);

router.get("/addBook", adminController.form);
router.post("/addBook", adminController.bcreate);
router.get("/updatebook/:id", adminController.bupdate);
router.post("/updatebook/:id", adminController.bedit);
router.get("/:id", adminController.bdelete);

module.exports = router;
