const { Router } = require('express');
const upload = require('./controllers/helpers/uploadIMG');
const app = new Router();
// requerindo as rotas
const users = require('./controllers/users');
const Situation = require('./controllers/situation');
const userIMG = require('./controllers/users-images');
const login = require('./controllers/login');
// Rotas de users
app.get('/users', users.index);
app.get('/users/:id', users.show);
app.post('/users', users.create);
app.put('/users/', users.update);
app.delete('/users/:id', users.destroy);

// rotas de Situações
app.get('/sit', Situation.index);
app.get('/sit/:id', Situation.show);
app.post('/sit', Situation.create);
app.delete('/sit/:id', Situation.destroy);
app.put('/sit', Situation.update);

// Rotas de Imagens
app.put('/users-img/:id', upload.single('image'), userIMG.updateIMG);
// rotas de login
app.post('/login', login.login);
module.exports = app;
