const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(8000, (req, res)=>{
    console.log("Server running at port 8000");
});
