const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
//middlewares
//when we hit the route that is the slash in get...before we execute the fnc...we execute this middleware

//app.use(auth);
//used for authenticating when we get on a particular route

const postsRoute = require('./routes/posts');

//use middleware to make routes
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);
//now we can make routes

app.get('/', (req, res) => {
  res.send('we are on home');
});

//connect to Db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB');
  }
);

//how do we start listening to the server
app.listen(30000);
