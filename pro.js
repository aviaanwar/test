
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(adminroutes);
app.use(shoproutes);




app.listen(3000);