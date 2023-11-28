// Ouverture de la modale au click sur le bouton "En savoir +"

const btn_enSavoirPlus_edf = document.querySelector(".btn-experience-edf");
const details_experience_edf = document.querySelector(".detail-experience-edf");
const btn_enSavoirPlus_mountnpass = document.querySelector(".btn-experience-mountnpass");
const details_experience_mountnpass = document.querySelector(".detail-experience-mountnpass");


btn_enSavoirPlus_edf.addEventListener("click", function() {
    details_experience_edf.classList.toggle("show-modal-experience");
})

btn_enSavoirPlus_mountnpass.addEventListener("click", function() {
    details_experience_mountnpass.classList.toggle("show-modal-experience");
})


// Fermeture de la modale au click sur la croix 

const close_modal_edf = document.querySelector("#picto-close-edf");
close_modal_edf.addEventListener("click", function() {
        details_experience_edf.classList.toggle("show-modal-experience");
})

const close_modal_mountnpass = document.querySelector("#picto-close-mountnpass");
close_modal_mountnpass.addEventListener("click", function() {
        details_experience_mountnpass.classList.toggle("show-modal-experience");
})

