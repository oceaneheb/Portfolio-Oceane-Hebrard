// Récupérer les 3 boutons de "compétences"
const button_front = document.querySelector("#button-competences > button:nth-child(1)");
console.log(button_front)
const button_back = document.querySelector("#button-competences > button:nth-child(2)");
console.log(button_back);
const button_tool = document.querySelector("#button-competences > button:nth-child(3)");
console.log(button_tool);

// Récupérer l'affichage des compétences sous forme de liste en fonction du bouton sélectionné
const list_front = document.querySelector(".front-skills");
console.log(list_front);
const list_back = document.querySelector(".back-skills");
console.log(list_back);
const list_tools = document.querySelector(".tool-skills");
console.log(list_tools);

// Bouton 1 : Compétences Front
button_front.addEventListener("click", function() {
    list_front.classList.remove('non-active');
    list_back.classList.add('non-active');
    list_tools.classList.add('non-active')

    button_front.classList.add('button-active');
    button_back.classList.remove('button-active');
    button_tool.classList.remove('button-active');
})

// Bouton 2 : Compétences Back
button_back.addEventListener("click", function() {
    list_front.classList.add('non-active');
    list_back.classList.remove('non-active');
    list_tools.classList.add('non-active')

    button_front.classList.remove('button-active');
    button_back.classList.add('button-active');
    button_tool.classList.remove('button-active');
})

// Bouton 3 : Compétences Outils
button_tool.addEventListener("click", function() {
    list_front.classList.add('non-active');
    list_back.classList.add('non-active');
    list_tools.classList.remove('non-active')

    button_front.classList.remove('button-active');
    button_back.classList.remove('button-active');
    button_tool.classList.add('button-active');
})