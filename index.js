const express = require('express');
const bodyParser = require('body-parser');
const qbRoutes = require('./routes/qbroutes');
const path = require('path');


const app = express();

const port = 5001;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin', qbRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`adminsite_backend is listening at ${port}`);
});
