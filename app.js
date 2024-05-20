const express = require('express');
const ejs = require('ejs');
const morgan = require("morgan");
const { connectDB } = require("./db/mongod");

const app = express();

connectDB();

app.listen(3000);


app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/payment', (req, res) => {
  res.render('payment');
})

app.use((req, res) => {
  res.status(404).render("404");
})