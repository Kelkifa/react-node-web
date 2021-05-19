const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(port, () => {
    console.log('App listening on port: ' + port);
});