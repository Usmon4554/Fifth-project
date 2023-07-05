// // Custom scripts
;

const clickBtn = document.querySelector(".x"),
    burger = document.querySelector(".burger__menu"),
    menu = document.querySelector(".menu")
    header = document.querySelector(".links");


burger.addEventListener('click', function (){
    header.style.padding = '0'
    burger.style.display = 'none'
    menu.style.display = 'flex'
    menu.style.opacity = '1'
    menu.style.transform = 'translateX(270px)';
    
    setTimeout(() => {
        menu.style.transform = 'scaleX(1)';
    }, 300);
});

clickBtn.addEventListener("click", function(){
    menu.style.transform = 'scaleY(0)'

    setTimeout(() => {
        menu.style.opacity = '0'
    }, 40);

    setTimeout(() => {
        menu.style.display = 'none'
        burger.style.display = 'block'
        header.style.padding = '30px'
    }, 300);
});