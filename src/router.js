const { Router } = require('express');
const app = new Router();
const users = require('./controllers/users');
app.get('/', users.index);
app.get('/users/:id', users.show);
app.post('/users', users.create);
app.put('/users/:id', users.update);
app.delete('/users/:id', users.destroy);

module.exports = app;
