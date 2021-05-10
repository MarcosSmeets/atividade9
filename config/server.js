const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes').then('app/controllers').into(app);

module.exports = app;