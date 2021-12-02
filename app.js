
const express = require('express'),
      app = express(),
      path= require('path'),
      port = 8000;
app.use(express.static(path.join(__dirname, '/incs')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res)=>{
    res.render('home');
})
app.listen(port, ()=>{
    console.log(`Mission success!`)
});