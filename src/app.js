const dotenv = require('dotenv');

const express = require('express');
const cookieParser = require('cookie-parser');     

const app = express();
app.use(cookieParser());

dotenv.config({ path: '../config.env' });  

require('./db/conn');
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(require('./Route/route'));

if (process.env.NODE_ENV == "production"){
    app.use(express.static("mernfrontend/build"))
};

app.listen(port, () => {
    console.log(port)
})