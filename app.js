const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const port = 9000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => console.log('Server is running on port ' + port));