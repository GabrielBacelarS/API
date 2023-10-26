require('dotenv').config()
module.exports ={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIA
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIA
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIA
  }
}
