const express = require('express');
const routes = express.Router();

const usersController = require('./controllers/usersController');

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.store);
routes.put('/users/:id', usersController.update);
routes.delete('/users/:id', usersController.destroy);

module.exports = routes;