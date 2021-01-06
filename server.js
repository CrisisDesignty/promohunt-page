const express = require("express");
const sectionRouter = require('./routes/section')
const app = express();

app.set('view engine', 'ejs');

app.use('/section', sectionRouter);

app.get('/', (req,res) =>{
    res.render('index')
})
app.listen(4000);
