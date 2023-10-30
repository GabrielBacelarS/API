FINALIZADO
Tecnologias Utilizadas:

Node.js: Plataforma de execução de JavaScript.

Express: Framework para criação de aplicativos da web em Node.js.

Sequelize: ORM (Object-Relational Mapping) para interagir com o banco de dados.

PostgreSQL: Sistema de gerenciamento de banco de dados relacional.

Multer: Middleware para manipulação de uploads de arquivos.

Bcrypt: Biblioteca para criptografia de senhas.

JSON Web Tokens (JWT): Utilizado para autenticação e autorização

COMO RODAR O PROJETO BAIXADO

Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados no PostgreSQL e alterar as credenciais o arquivo 
.env

Executar as migrations 
### npx sequelize-cli db:migrate

executar as seeders
### npx sequelize-cli db:seed:all

Rodar o projeto
### node run api



SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
### npm install --save express

Rodar o projeto
### node run api

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

comando sql para criar a base de dados
### create database api_database

Sequelize é uma biblioteca javascript que facilita o gerenciamento de dados no banco de dados SQL
### npm install --save sequelize

{indicar qual banco de dados esta utilizando
postgreSQL = npm install --save pg-hstore
mysql = npm install --save mysql2
}

Seqielize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para o banco de dados
### npm install --save-dev sequelize-cli

Iniciar o sequelize cli e criar o arquivo config 
### npx sequelize-cli init

dotenv cuida das variaveis de ambiente e agiliza o processo de configuração
### npm install dotenv --save

Criar a Models Situação
### npx sequelize-cli model:generate --name Situations --attributes nameSituation:string

Criar a Models users
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,situationId:integer

Criar a seed chamada situation
### npx sequelize-cli seed:generate --name demo-situations

Criar a seed chamada usuarios
### npx sequelize-cli seed:generate --name demo-users

Executar as migrations 
### npx sequelize-cli db:migrate

executar as seeders
### npx sequelize-cli db:seed:all

Criar migration 
### npx sequelize-cli migration:generate --name=alter-users-image

Executar Down - rollback - Permite que seja  desfeita a migration, permitindo a gestão das alterações no banco de dados, versionamento
### npx sequelize-cli db:migrate:undo --name

Multer é um middleware node.js para manipulação multipart/form-data, usado para o upload de arquivos.
### npm install --save multer

Modulo para criptografar a senha 
### npm install --save bcryptjs

Instalar a dependencia  JWT 
### npm install --save jsonwebtoken
