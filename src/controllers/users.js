// Acessando o banco de dados
const { Error } = require('sequelize');
const db = require('../db/models/index');

class UsersController {
  async index(req, res) {
    // recuperando o registro do banco de dados
    const allUsers = await db.Users.findAll({
      // indicar quais colunas queremos recuperar
      attributes: ['id', 'name', 'email'],

      // ordenar os registros pela coluna id em forma descrecente
      order: [['id', 'DESC']],
    });
    if (allUsers) {
      res.status(200).json({
        allUsers,
      });
    } else {
      res.status(404).json({
        message: 'Erro ao Listar os usuarios, Entre em contatp com o suporte',
      });
    }
  }

  async show(req, res) {
    //cria a rota visualizar e recebe o parametro id pela url
    // Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/:id
    // recebendo o id pelo u
    const  id  = req.params;
    const view = await db.Users.findByPk(id)
    console.log(view);
    // if(view){
    //   res.json({
    //     view
    //   })
    // }else{
    //   res.json({
    //     Menssage: error 
      
    //   })
    // }
  }

  async create(req, res) {
    // Criar  a rota cadastrar
    // Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/
    // receber os dados do body
    const data = req.body;
    // Salvar no banco de dados
    await db.Users.create(data)
      .then((dataUser) => {
        res.status(201).json({
          dataUser,
          message: 'Usuario cadastrado com sucesso',
        });
      })
      .catch((erro) => {
        res.status(404).json({
          message: 'Usuario Não cadastrado',
        });
        console.log(erro);
      });
  }

  async update(req, res) {
    // Criar a rota editar e receber o id enviado da url
    const { id } = req.params;
    // receber os dados enviados no corpo da requisição
    const { _id, name, email, situationId } = req.body;
    return await res.json({
      id,
      _id,
      name,
      email,
      situationId,
    });
  }

  async destroy(req, res) {
    // Criar a rota apagar e receber o id enviado da url
    const { id } = req.params;
  }
}

module.exports = new UsersController();
