const navMenu = document.querySelector('.navbar')
const body = document.body;
const navOpen = document.getElementById("nav-open")
const navClose = document.getElementById("nav-close")
const link = document.querySelectorAll('nav .navbar ul li a')
const nav = document.querySelector('nav')
const productContainer = document.querySelector('.product-container');
let lastScroll = window.scrollY;
let timeout;
const cardTemplate = `<div class="card">
                <img src="public/Cappuccino.jpeg" alt="" width="200" height="200">
                <h1>Kopi Cappucino</h1>
                <p>Lorem ipsum dolor sit,  nemo? Temporibus vel, enim aspernatur sed minus tenetur nesciunt atque odit!</p>
                <h4>Rp. 10.000</h4>
              </div>`
let card = ''


navOpen.addEventListener('click', ()=>{
    navOpen.classList.toggle('hidden')
    navMenu.classList.toggle('navbar-down')
    navClose.classList.toggle('show')
})

navClose.addEventListener('click', ()=>{
    navOpen.classList.toggle('hidden')
    navMenu.classList.toggle('navbar-down')
    navClose.classList.toggle('show')
})

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', ()=>{
    navOpen.classList.toggle('hidden')
    navMenu.classList.toggle('navbar-down')
    navClose.classList.toggle('show')
    })
}
window.addEventListener('scroll', ()=>{
    const currentScroll = window.scrollY;
    if(currentScroll > lastScroll){
        nav.classList.add('hidden')
    }

    clearTimeout(timeout)
    timeout = setTimeout(()=>{
        nav.classList.remove("hidden")
    }, 150)
    
})

for(let i = 0; i < 5; i++){
    card += cardTemplate;
}
productContainer.innerHTML = card