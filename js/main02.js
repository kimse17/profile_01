const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up")

document.addEventListener('scroll', () => {

    if (window.scrollY > homeHeight / 2) {

        top_button.style.opacity = 1;

    } else {

        top_button.style.opacity = 0;

    }

})

/*const testimonal = document.querySelector('.testimonial_all')
document.addEventListener('scroll', () => {

    if (window.scrollY > 600) {

        testimonal.style.color = red;

    } else {

        testimonal.style.color = black;

    }

})*/
const font_color = document.querySelector('section_style')

const navToggle = document.querySelector('.hamburger');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

const navMenu = document.querySelector('.header_menu');
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
})

