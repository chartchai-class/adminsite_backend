const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const db = require("./config/mysqlconfig");

//authentication
const session = require("express-session");
const mysqlStore = require("express-mysql-session")(session);
const sessionStore = new mysqlStore(db.config);
const app = express();
const port = 5001;


//session middleware
app.use(session({
  store: sessionStore,
  secret: 'secret_is_secret_you_idoit!',
  resave: true,
  saveUninitialized: true,
  cookie:{
    maxAge:3600000,
    sameSite:true,
    httpOnly: true,
    secure: false 
  }

}))
// Optionally use onReady() to get a promise that resolves when store is ready.
sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore ready');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});

require("dotenv").config();



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

app.use((req,res)=>{
  res.status(404);
  res.render('404');
})

app.listen(port, () => {
  console.log(`adminsite_backend is listening at ${port}`);
});
