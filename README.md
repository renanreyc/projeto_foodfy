<h1>
    <img align="right" height="240" src=public/assets/chef.png>
</h1>

# Foodfy
<b>As melhores receitas</b>
 | Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.
## :hamburger: Sobre

O projeto **Foodfy** é uma aplicação web completa de gerenciamento de receitas, desenvolvida durante o bootcamp **LaunchBase** da [Rocketseat](https://rocketseat.com.br/) com o intuito de colocarmos em prática todo conteúdo estudado durante o curso.

## :coffee: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [HTML](https://devdocs.io/html/)
- [CSS](https://devdocs.io/css/)
- [JavaScript](https://devdocs.io/javascript/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [NodeJS](https://nodejs.org/en/)
- [Nodemailer](https://nodemailer.com/about/)
- [Express](https://expressjs.com/)
- [Express Session](https://github.com/expressjs/session)
- [Multer](https://github.com/expressjs/multer)
- [PostgreSQL](https://www.postgresql.org/)
- [BcryptJS](https://github.com/dcodeIO/bcrypt.js)
- [Faker.js](https://github.com/Marak/Faker.js)

### :fried_egg: Como baixar o projeto
Para rodar a aplicação, você precisa instalar o [Node](https://nodejs.org/en/) e o banco de dados [Postgres](https://www.postgresql.org/).
Agora siga os passos abaixo:
```Bash   
    # Clonar diretório ou baixe o diretório manualmente
    $ git clone https://github.com/renanreyc/projeto_foodfy.git

    # Entrar no diretório
    $ cd projeto_foodfy

    # Instalar as dependências
    $ npm install
    
    # Crie o banco de dados e as tabelas utilizando os comandos
    # inclusos no arquivo "foodfy.sql".

    # Conexão com o banco de dados:
    # Abra e edite o arquivo "db.js" dentro da pasta "src/config"
    # com o seu user e password do Postgres.

    # De a primeira carga no banco de dados utilizando o arquivo "seed.js":
    $ node seed.js
    
    # Iniciar o projeto
    $ npm start
```

**Importante:** Não exclua ou altere as imagens de placeholder diretamente da pasta `plublic/images`, pois as receitas e chefs gerados pelo `seed.js` compartilham desses arquivos entre si. Porém, é seguro deletá-las pela área administrativa do site.

---

### Acessando a Área Administrativa

Selecione um email da tabela users, acesse a tela de login e entre utilizando o mesmo com a senha "rocket" (senha padrão).

Dica: usuários administradores possuem a badge "ADMIN" no header:
<p align="center">
  <img src=".github/admin_badge.png" alt="página admin">
</p>


### Criando Novos Usuários e Recupeção de Senha

Para usar estes recursos, edite o arquivo `mailer.js` dentro da pasta `scr/lib` com suas credenciais.

---

:lobster: Desenvolvido por Renan Rey :lobster:


