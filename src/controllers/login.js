const db = require('../db/models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserLogin {
  async login(req, res) {
    var data = req.body;
    const user = await db.Users.findOne({
      attributes: ['id', 'name', 'email', 'password'],
      where: { email: data.email },
    });
    
    if (!user) {
      res.status(400).json({
        error: true,
        message: 'Error: Usuário ou senha incorreto!',
      });
    } else {
      // Gerar token de autenticação
      const token = jwt.sign({id: user.id}, process.env.SECRET, {
        expiresIn: 600 // 10m
        // expiresIn: '1d' 1 dia
      })
      // Agora, verifique a senha
      const isPasswordValid = await bcrypt.compare(data.password, user.password);
      if (isPasswordValid) {
        return res.status(200).json({
          error: false,
          message: 'Login realizado com sucesso!',
          user: {id: user.id, name: user.name},
          token
        });
      } else {
        res.status(400).json({
          error: true,
          message: 'Error: Usuário ou senha incorreto!',
        });
      }
    }

    
  }
}
module.exports = new UserLogin()