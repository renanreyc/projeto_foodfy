const modalOverlay = document.querySelector(".modal-overlay")
const recipes = document.querySelectorAll(".recipe")


for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        const recipeId = recipe.getAttribute("id")
        modalOverlay.querySelector("img").src = recipeId

        const recipeName = recipe.querySelector(".recipe__name").innerText //ou innerHTML
        document.getElementById("modal-title").innerHTML = recipeName
        console.log(recipeName)

        const recipeChef = recipe.querySelector(".recipe__chef").innerText
        document.getElementById("modal-chef").innerHTML = recipeChef
        console.log(recipeChef)

        modalOverlay.classList.add("active")
        console.log(recipeId)
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("img").src = ""
})
