class UsersController {
  async index(req, res) {
    return await res.send('listar usuarios');
  }

  async show(req, res) {
    //cria a rota visualizar e recebe o parametro id pela url
    // Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/:id?
    const { id } = req.params;
    const { sit } = req.query;
    return await res.json({
      id,
      name: 'user',
      email: 'user@example.com',
      situationId: sit,
    });
  }

  async create(req, res) {
    // Criar  a rota cadastrar
    // Endereço para acessar atraves da aplicação externa : http://localhost:8080/users/
    // receber os dados do body
    const { name, email, situationId } = req.body;
    return await res.json({
      name,
      email,
      situationId,
    });
  }

  async update(req, res) {
    // Criar a rota editar e receber o id enviado da url
    const {id} = req.params;
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
    return await res.json({
      id,
    });
  }
}

module.exports = new UsersController();
