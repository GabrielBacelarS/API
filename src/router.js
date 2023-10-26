const { Router } = require('express');
const app = new Router();
const users = require('./controllers/users');
const Situation = require('./controllers/situation');

// Rotas de users
app.get('/', users.index);
app.get('/users/:id', users.show);
app.post('/users', users.create);
app.put('/users/:id', users.update);
app.delete('/users/:id', users.destroy);

// rotas de Situações
app.get('/sit', Situation.index)
app.post('/sit', Situation.create )

module.exports = app;
