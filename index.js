const express = require('express');
const bodyParser = require('body-parser');
const qbRoutes = require('./routes/qbroutes');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:"notguessful-session+07401",
    saveUninitialized: false,
    resave:false,
}));
app.use('/admin', qbRoutes);
app.use(qbRoutes);

const port = 5001;

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/logout', (req, res) => {
    // Destroy session to log the user out
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.redirect('/');
        }
      // Redirect to the home page or a login page after logout
        res.redirect('/login');
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    const user = await getUserByUsername(username);

    if (user && await bcrypt.compare(password, user.passwordHash)) {
      // Set session variable to indicate the user is logged in
        req.session.user = { username };

      // Redirect to a protected route or render a success page
        res.redirect('/dashboard');
    } else {
      // Authentication failed, render the login page with an error message
        res.render('login', { error: 'Invalid username or password' });
    }
});

async function getUserByUsername(username) {
    // Replace this with your logic to retrieve user data
    // You might have an array or object of hardcoded users
    const hardcodedUsers = {
        'demo': {
        username: 'demo',
        passwordHash: '$2y$10$2APc.nBnHJmS249lpyl.aOz64xqx99MgYwG9CXtaNNUy12VpM94Mu' // bcrypt hashed password
        },
      // Add more users as needed
    };
    return hardcodedUsers[username];
}

app.get('/', (req, res) => {
    res.sendFile('login.ejs');
});

app.listen(port, () => {
    console.log(`adminsite_backend is listening at ${port}`);
});
