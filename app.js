const express = require('express');
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
    console.log('App.js Error', err);
    res.status(500).send({msg: 'Internal Server Error - Please try again later!'});
})

module.exports = app;