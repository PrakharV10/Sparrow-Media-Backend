const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')

// Routes
const users = require('./users.router.js');
const login = require('./login.router.js');
const signup = require('./signup.router.js');

const app = express();

const corsOptions = {
  origin : "https://sparrow-visuals.netlify.app",
  optionsSuccessStatus: 200
}

app.use(bodyParser.json())
app.use(cors())
app.use('/users', users)
app.use('/login', login)
app.use('/signup', signup)

app.get('/', (req, res) => {
  res.send('Hello Sparrow Visuals!!')
});

app.listen(3000, () => {
  console.log('server started');
});


