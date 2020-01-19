const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World from HTTP server with express.js')
});

app.listen(8080, (err) => {
    if (err) throw err;

    console.log('Server listen on port 8080');
});
