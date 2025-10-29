const menu = document.getElementById("mobile-btn-dft");
const blocoMenu = document.getElementById("mobile-menu");
const IconMenu = document.getElementById("iconMenu");

menu.addEventListener("click", ()=> {
    blocoMenu.classList.toggle("active");
    if(IconMenu.classList.contains("fa-bars")){
        IconMenu.classList.remove("fa-bars");
        IconMenu.classList.add("fa-x");
    }else{
        IconMenu.classList.add("fa-bars");
        IconMenu.classList.remove("fa-x");
    }
})