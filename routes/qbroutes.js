const express = require("express");

const router = express.Router();
const authenController = require("../controllers/authenController");
const adminController = require("../controllers/adminController");

// for home page showing


//BillHistory
router.get("/billHistory", adminController.billHistory);
router.get("/bestSeller", adminController.bestSeller);


router.get("/main", adminController.view);
router.get("/categories", adminController.mainCategory);
router.get("/addCategory", adminController.cform);
router.post("/addCategory", adminController.create);
router.get("/updateCate/:id", adminController.update);
router.post("/updateCate/:id", adminController.edit);
router.get("/category/:id", adminController.delete);
router.get("/categories/:categoryId", adminController.category);


router.get("/addBook", adminController.form);
router.post("/addBook", adminController.bcreate);
router.get("/updatebook/:id", adminController.bupdate);
router.post("/updatebook/:id", adminController.bedit);
router.get("/:id", adminController.bdelete);

//authentication 
router.get("/", authenController.login)
router.post("/", authenController.userlogin);
router.get("/logout",authenController.logout)

module.exports = router;
