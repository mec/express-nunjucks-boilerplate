const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('index', { title: 'Express App', message: 'world' });
});

module.exports = routes;
