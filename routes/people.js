const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('index', { title: 'People', message: 'world' });
});

routes.get('/all', (req, res) => {
  res.render('index', { title: 'All people', message: 'world' });
});

module.exports = routes;
