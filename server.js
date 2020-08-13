const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const indexRoute = require('./routes/index');

app.set("view engine", "ejs");
app.set("layout", "layouts/layout");

app.use(expressLayout);
app.use(express.static('public'));


app.use('/', indexRoute);

app.listen(process.env.PORT||4000);
console.log("Listening to Port 4000");