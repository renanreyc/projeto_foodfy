const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const home = {
        title_home: "As melhores receitas",
        subtitle_home: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        best_recipes: "Mais acessadas"
    }

    return res.render("index", {items: recipes, home})
})

server.get("/about", function(req, res) {
    const about = {
        text_one: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        text_two: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
    }

    return res.render("about", {about})
})

server.get("/recipes", function(req, res) {

    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex]
    
    return res.render("recipe", {recipe})
  })

    server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(1000, function() {
    console.log("server is running")
})