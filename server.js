// Dependancies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Apps

const app = express();

// MiddleWare

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

const routes = require('./server/routes')
routes(app);
// PORT
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
const PORT = 8000;
app.listen(PORT, function(req,res){
    console.log(`Running on ${PORT}`);
})