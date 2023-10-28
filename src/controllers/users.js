// Acessando o banco de dados
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
    // recebendo o id pelo params
    const id = req.params.id;
    const view = await db.Users.findOne({
      where: { id: id },
      attributes: ['id', 'name', 'email', 'situationId'],
      include: [
        {
          model: db.Situations,
          attributes: ['nameSituation'],
        },
      ],
      // ordenar os registros pela coluna id em forma descrecente
      order: [['id', 'DESC']],
    });
    if (view) {
      res.status(200).json({
        view,
      });
    } else {
      res.status(404).json({
        view,
        message: `O usuario com id: "${id}" Não existe`,
      });
    }
  }

  async create(req, res) {
    // Criar  a rota cadastrar
    // Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/
    // receber os dados do body
    const data = req.body;
    // Salvar no banco de dados
    const emailUser = req.body.email;
    const VerificarEmailExistent = await db.Users.findOne({
      where: { email: emailUser },
    });
    if (VerificarEmailExistent) {
      return res.json({
        message: `O email: ${emailUser} já foi cadastrado no banco de dados`,
      });
    } else {
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
  }

  async update(req, res) {
    // receber os dados enviados no corpo da requisição
    const data = req.body;

    await db.Users.update(data, { where: { id: data.id } })
      .then(() => {
        return res.status(200).json({
          error: false,
          message: 'Usuario editado com sucesso',
        });
      })
      .catch((erro) => {
        return res.status(404).json({
          error: true,
          message: 'Não foi possivel editar o Usuario',
        });
      });
  }

  async destroy(req, res) {
    // Criar a rota apagar e receber o id enviado da url
    const { id } = req.params;
    // Deletar o usuario que o id seja o mesmo  que recebemos da url
    const listUser = await db.Users.destroy({
      where: { id: id },
    });
    if (listUser) {
      listUser;
      res.status(200).json({
        message: 'Usuario deletado com sucesso',
      });
    } else {
      res.status(404).json({
        message: `Não foi possivel encontrar o usuario com id: ${id}`,
      });
    }
  }
}

module.exports = new UsersController();
