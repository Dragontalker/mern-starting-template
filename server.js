// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan('dev'));

app.get('', (req, res) => {
    const data = {
        msg: 'API server is running!',
        port: `Curernt port is ${PORT}`
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});