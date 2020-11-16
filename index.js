const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Heroku!');
});

app.listen(process.env.PORT || 3000);