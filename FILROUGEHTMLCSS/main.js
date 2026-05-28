// Pour voir les éléments qui depasse
document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log(el);
    }
});


// box-shadow scroll
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('header');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

// box-shadow scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Ouvrir et fermer le burger
const burger = document.querySelector('#logoBurger');
const navBurger = document.querySelector('.navigationBurger');
const fermer = document.querySelector('#elFermer');

burger.addEventListener('click', () => {
    navBurger.classList.add('ouvert');
});

fermer.addEventListener('click', () => {
    navBurger.classList.remove('ouvert');
});

document.addEventListener('click', (leClick) => {
    if (!burger.contains(leClick.target) && !navBurger.contains (leClick.target)) {
        navBurger.classList.remove('ouvert');
    }       
})


// CARROUSEL

// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel-button.next');
// const prevButton = document.querySelector('.carousel-button.prev');

// let currentIndex = 0;

// function updateSlidePosition() {
//     const slideWidth = slides[0].getBoundingClientRect().width;
//     track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
// }

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlidePosition();
// });

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     updateSlidePosition();
// });

