const menu = document.getElementById("mobile-button-dft");
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


document.addEventListener("scroll", ()=>{
    const header = document.getElementById("header");
    const scrollPosition = window.scrollY - 91;

    if(scrollPosition <= 0){
        header.style.boxShadow = "none";
    }else{
        header.style.boxShadow = " 0 1px 0 0 rgba(0, 0, 0, 0.1)";
    }
})

const navItens = document.querySelectorAll(".navItem");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
    let atual = "";

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop){
            atual = section.id;
        }
    });

    navItens.forEach(item => {
        item.classList.remove("active");
        if(item.querySelector("a").getAttribute("href") === "#" + atual) {
            item.classList.add("active");
        }
    })

})

ScrollReveal().reveal("#cta", {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal("#models-bikes", {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal(".text-img", {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal(".feedback", {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});