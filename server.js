const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { seedData } = require('./db/seedData');
const { getRecords } = require('./db/getRecords');
const { createRecord } = require('./db/createRecord');
const privates = require('./config/privates');

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: privates.mysqlUser,
  password: privates.mysqlPassword,
  database: 'phone_book_db',
});

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection.connect((err) => {
  if (err) {
    console.log('Connection failed.');
  } else {
    console.log('Connected to mysql database.');
  }
});

try {
  seedData(connection);
} catch (err) {
  console.log(err);
}

app.get('/api/records', (req, res) => {
  getRecords(connection, res);
});

app.post('/api/records', (req, res) => {
  createRecord(connection, req, res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}.`));
