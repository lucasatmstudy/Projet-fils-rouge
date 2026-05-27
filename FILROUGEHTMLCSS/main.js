window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log(el);
    }
});

const burger = document.querySelector('#logoBurger');
const navBurger = document.querySelector('.navigationBurger');
const fermer = document.querySelector('#elFermer');
const fermerClick = document.querySelector('body')

// Ouvrir et fermer le burger
burger.addEventListener('click', () => {
    navBurger.classList.add('open');
});

fermer.addEventListener('click', () => {
    navBurger.classList.remove('open');
});

document.addEventListener('click', (leclick) => {
    if (!navBurger.contains(leclick.target) && !burger.contains(leclick.target))  {
    navBurger.classList.remove('open');
    }
});
