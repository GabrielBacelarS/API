// iclui as bibliotecas
// Gerencia as requisições, rotas e Urls, entre outras funcionalidades
const express = require('express');
// Chama a função express
const app = express();
// cria o middleware para receber dados no corpo daplicação
app.use(express.json());
// Cria a rota Listar
// Endereço para acessar atraves da aplicação externa : http://localhost:8080
app.get('/', (req, res) => {
    res.send('Listar users');
});

// Cria a rota visualizar e recebe o parametro id pela url
// Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/:id?
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const { sit } = req.query;
    return res.json({
        id,
        name: 'user',
        email: 'user@example.com',
        situationId: sit,
    });
});
// Criar  a rota cadastrar
// Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/
app.post('/users', (req, res) => {
    // receber os dados do body
    const { name, email, situationId } = req.body;
    return res.json({
        name,
        email,
        situationId,
    });
});
// Criar a rota editar e receber o id enviado da url
app.put('/users/:id', (req, res) => {
    // receber os dados enviados no corpo da requisição
    const { _id, name, email, situationId } = req.body;
    return res.json({
        id,
        _id,
        name,
        email,
        situationId,
    });
});
// Criar a rota apagar e receber o id enviado da url
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    return res.json({
        id,
    });
});
// inicia o servidor na rota 8080
app.listen(8080, () => {
    console.log('Server open in port 8080: http://localhost:8080');
});
