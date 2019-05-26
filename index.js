const express = require('express');
const endpoints = require('./endpoints/index');
const app = express();
const port = 3003;

app.get('/', (req, res) => res.send('Google Search API'));

endpoints.createEndpoints(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
