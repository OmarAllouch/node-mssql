'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors());

app.use('/api', studentRoutes.routes);

app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));
