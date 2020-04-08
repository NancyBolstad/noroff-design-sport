'strict mode';

var serveStatic = require('serve-static');
var express = require('express');
var path = require('path');
var cors = require('cors');
var data = require('../data/projects.json');

var app = express();
var port = process.env.PORT || 8001;
var corsOptions = {
    origin: '*',
    credentials: true
  };


app.use(cors(corsOptions));

app.use('/', serveStatic(path.resolve(__dirname, '../static/')));

app.get('/projects', function (_, res, _,) {
    res.json(data);
});

app.listen(port, () => {
    console.log(`🚀Server listening on port ${port}`);
  });
