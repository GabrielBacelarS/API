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

  async show(req, res) {
    const { id } = req.params;
    const OneSit = await db.Situations.findOne({
      where: { id: id },
      attributes: ['nameSituation', 'createdAt', 'updatedAt'],
    });

    if (OneSit) {
      res.status(200).json({
        OneSit,
      });
    } else {
      res.status(404).json({
        OneSit,
        message: `Error: Não foi possivel encontrar uma situação com Id: ${id}},`,
      });
    }
  }

  async create(req, res) {
    const data = req.body;

    await db.Situations.create(data)
      .then((dataUser) => {
        res.status(201).json({
          message: 'Situação cadastrada com sucesso',
          dataUser,
        });
      })
      .catch((error) => {
        res.status(404).json({
          message: 'error ao criar uma nova  Situação',
          error,
        });
      });
  }
  async destroy(req, res) {
    const { id } = req.params;
    await db.Situations.destroy({
      where: { id: id },
    }).then((delSit) => {
      res.status(200).json({
          delSit,
          message: 'Situação excluida com sucesso',
        })
        .catch((error) => {
          res.status(404).json({
            message: `Error ao encontrar a situacao com id ${id}`,
          });
          console.log(error);
        });
    });
  }
}

module.exports = new SituationsController();
