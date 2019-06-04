const express = require('express');
const config = require('../config');

const app = express();

app.use(express.static(__dirname));

app.listen(config.port, () => console.log('Front-End listening on port ' + config.port));