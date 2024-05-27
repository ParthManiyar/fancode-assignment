const express = require('express');
const bodyParser = require('body-parser');

const helper = require("./src/lib/helper");
// Middleware to parse JSON bodies
const app = express();
app.use(bodyParser.json());


//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

module.exports = {
  app: app
}