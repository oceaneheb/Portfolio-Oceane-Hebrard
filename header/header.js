const btn_burger = document.querySelector(".burger");
btn_burger.addEventListener("click", function() {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");

    btn_burger.classList.toggle("fa-xmark");
})

const liens = document.querySelectorAll(".lien-navbar"); /*Liste qui contient tous les élements de classe .lien-navbar*/

liens.forEach(lien => {
    lien.addEventListener("click", function() {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
    })
})