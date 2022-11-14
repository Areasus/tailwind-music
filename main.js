const burger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")

burger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})