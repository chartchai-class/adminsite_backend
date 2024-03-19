const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");


require("dotenv").config();

const app = express();
const port = 5001;

//parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());
//parse fileupload middlewares
app.use(fileUpload({ limits: { files: 1 } }));

//static files

app.use(express.static("public"));
app.use(express.static("upload"));

//templating engine

app.set("views", "./view");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main");

const qbRoutes = require("./routes/qbroutes");
app.use("/", qbRoutes);

app.listen(port, () => {
  console.log(`adminsite_backend is listening at ${port}`);
});
