const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const privates = require('./config/privates');

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port);
