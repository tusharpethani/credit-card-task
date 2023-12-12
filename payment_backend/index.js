const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const { addCard } = require('./controllers/card');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.post('/addCard', addCard);

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
});