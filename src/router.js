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
app.get('/sit/:id', Situation.show)
app.post('/sit', Situation.create )
app.delete('/sit/:id', Situation.destroy)
module.exports = app;
