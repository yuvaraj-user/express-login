const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const methodOverride = require('method-override'); 
const path        = require('path');
const session = require("express-session");

const axios       = require('axios');
const cors        = require('cors');

const port        = 8000;

app.use(session({
	secret: 'test123',
	resave: true,
	saveUninitialized: true
}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const usermodel      = require('./models/indexmodel.js');
const usercontroller = require('./controller/indexcontroller.js');
const userRoute = require("./routes/userroutes");
app.use(express.static(path.join(__dirname,'public')));

app.listen(port,() => {
    console.log(`Server is running on ${ port }`);
});
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine",'ejs');
app.use(userRoute);
app.use(cors());
