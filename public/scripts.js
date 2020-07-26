const recipes = document.querySelectorAll(".recipe")

const content = document.querySelectorAll(".ingredients__foodfy .content")
const buttons = document.querySelectorAll(".button")

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id")
        window.location.href = `/recipes/${recipeId}`

        console.log(recipeId)
    })
}

for (let [i,button] of buttons.entries()) {
    button.addEventListener("click", function() {
        if(content[i].classList.contains("show")){
            content[i].classList.remove('show')
            content[i].classList.add('hide')
            button.innerHTML = "Mostrar"
        }else {
            content[i].classList.remove('hide')
            content[i].classList.add('show')
            button.innerHTML = "Esconder"
        }
    })
}


console.log(buttons)


