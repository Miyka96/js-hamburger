// CREO DELLE VARIABILI PER GLI ELEMENTI HTML SU CUI DEVO LAVORARE
const hamburgerMenuList = document .querySelector('.hamburger-menu');
const hamburgerMenuIcon = document .querySelector(".fas.fa-bars");
const closeIcon = document .querySelector(".close")

console.log(hamburgerMenuIcon)


hamburgerMenuIcon.addEventListener('click', function () {
    hamburgerMenuList .classList.add("active");
})

closeIcon.addEventListener('click', function () {
    hamburgerMenuList .classList.remove("active");
})

