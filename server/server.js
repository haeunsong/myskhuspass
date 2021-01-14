const express = require('express');
const app = express();
const port = 5000;

const api = require('./routes/index');

app.use('/',api);

app.listen(port,()=>console.log(`Listening on port ${port}`));