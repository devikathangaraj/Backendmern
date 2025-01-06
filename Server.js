const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log("hi");
    // res.status(500).send("error occured");
    // res.json({express:"learning express"});
    // res.send("hello world");
    res.render("index.ejs");
});
const userRoute = require('./routes/user');
app.use('/user',userRoute);
app.listen(3000);