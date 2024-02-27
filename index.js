const express = require('express');
const bodyParser = require('body-parser');
const qbRoutes = require('./routes/qbroutes');
const path = require('path');
const dbModule = require('./config/mysqlconfig');

const app = express();

const port = 5001;

// Apply body parsers before using the routes
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

// Use your routes after setting up the body parsers
app.use(qbRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});


app.get('/category', async (req, res) => {
    const sqlQuery = 'SELECT * FROM category';

    try {
        const pool = dbModule.createPool();
        const connection = await pool.getConnection();
        const [result, fields] = await connection.query(sqlQuery);
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } 
});
app.listen(port, () => {
    console.log(`adminsite_backend is listening at ${port}`);
});
