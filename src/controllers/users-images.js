const db = require('../db/models/index');
const fs = require('fs');
class imageUser {
  // Rota para fazer a edição da imagem, rota para acessar
  // http://localhost:8080/users-img
  async updateIMG(req, res) {
    const { id } = req.params;
    if (!req.file) {
      return res.status(404).json({
        error: true,
        message: 'Arquivo inválido, arquivos válidos: JPEG, PNG',
      });
    }
    // Recuperar o registro do banco de dados
    const user = await db.Users.findOne({
      // indicar quais colunas recuperar
      attributes: ['id', 'image'],
      //Acrescentar a condição para indicar qual registo deve ser retornado do banco de dados
      where: { id },
    });
    // Verificar se o usuario tem imagem salva no Banco de dados
    if (user.dataValues.image) {
      // Criar o caminho da imagem salva no banco de dados
      var imgOld = './src/controllers/public/images/users/' + user.dataValues.image;

      // fs.acess usado para acessar/testar as permições do arquivo
      fs.access(imgOld, (err) => {
        // acessa o if quando não  tiver erro
        if (!err) {
          // apagar a imagem antiga
          fs.unlink(imgOld, () => {});
        }
      });
    }
    try {
      await db.Users.update({ image: req.file.filename }, { where: { id } });
      res.status(200).json({
        error: false,
        message: 'Imagem alterada com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: 'Erro: imagem não editada com sucesso',
      });
    }
  }
}

module.exports = new imageUser();
