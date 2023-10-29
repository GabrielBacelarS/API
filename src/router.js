const { Router } = require('express');
const upload = require('./controllers/helpers/uploadIMG')
const app = new Router();
const users = require('./controllers/users');
const Situation = require('./controllers/situation');

// Rotas de users
app.get('/', users.index);
app.get('/users/:id', users.show);
app.post('/users', users.create);
app.put('/users/', users.update);
app.put('/users-img/:id', upload.single('image'),  users.updateIMG)
app.delete('/users/:id', users.destroy);

// rotas de Situações
app.get('/sit', Situation.index)
app.get('/sit/:id', Situation.show)
app.post('/sit', Situation.create )
app.delete('/sit/:id', Situation.destroy)
app.put('/sit', Situation.update)
module.exports = app;
