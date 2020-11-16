const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const url = process.env.MongoDB_URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('Hello Heroku!');
});

app.listen(process.env.PORT || 3000);