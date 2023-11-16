const hamburguer = document.querySelector(".hamburguer");
let menuMobile = document.querySelector(".menu-mobile");

hamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("open");
    if (menuMobile.classList.contains("open")){
        hamburguer.innerHTML = "<img src='img/Close.png'>";
    } else {
        hamburguer.innerHTML = "<i class='fa fa-bars'></i>";
    }
})