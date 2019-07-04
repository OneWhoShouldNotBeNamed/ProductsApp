// Variable Declaration
const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
const app= express();
const mongoose = require('mongoose');
const port = process.env.PORT || 1234;
//App Use Middle ware
app.use('/products',product);
//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection

let dev_db_url = 'mongodb+srv://someuser:abcd1234@mycluster-bel5b.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(port ,() => {
console.log('Server is up and running on port'+port);
});

//mongodb+srv://someuser:<password>@mycluster-bel5b.mongodb.net/test?retryWrites=true&w=majority