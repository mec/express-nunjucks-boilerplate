const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const path = require('path');

const app = express();

const isDevelopment = app.get('env') === 'development';
const viewsPath = path.join(__dirname, 'views');

nunjucks.configure(viewsPath, {
  express: app,
  tags: {
    // variableStart: '<$',
    // variableEnd: '$>'
  }
});

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, '/views'));

app.use(logger('dev'));

app.use('/', require('./routes'));
app.use('/people', require('./routes/people.js'));
app.use('/pets', require('./routes/pets.js'));

app.use(express.static(path.join(__dirname, 'static')));

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(isDevelopment ? 4000 : 80);
