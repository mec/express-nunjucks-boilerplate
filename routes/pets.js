const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('index', { title: 'Pets', message: 'world' });
});

routes.get('/all', (req, res) => {
  res.render('index', { title: 'All pets', message: 'world' });
});

module.exports = routes;
