const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./routes/route');

const app = express()

const port = 5000

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})