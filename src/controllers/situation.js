const db = require('../db/models/index');

class SituationsController {
  async index(req, res) {
    const allSit = await db.Situations.findAll();

    if (allSit) {
      res.status(200).json({
        message: 'Listando todas as Situações',
        allSit,
      });
    } else {
      res.status(404).json({
        message: 'error ao listar situacoes, entre em contato com o suporte',
      });
    }
  }
  async create(req, res) {
    const data = req.body;

    await db.Situations.create(data)
      .then((dataUser) => {
        res.json({
          message: 'Situação cadastrada com sucesso',
          dataUser,
        });
      })
      .catch((error) => {
        res.json({
          message: 'error ao criar uma nova  Situação',
          error,
        });
      });
  }
}

module.exports = new SituationsController();
