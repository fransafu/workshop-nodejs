// Load file .env with environment vars
require('dotenv').config()

// Load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Instancia de express en la variable 'app'
const app = express();
const routes = require('./routes');

// Parse request from client when use form or json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Security
app.use(helmet());

// Load routes
app.use('/', routes);

// Lister server on PORT and connect database
app.listen(process.env.PORT, (err) => {
    if (err) throw err;

    return mongoose
        .connect(process.env.URL_MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            console.log('Server listening on port 8080');
        })
        .catch((err) => {
            throw err;
        });
});
