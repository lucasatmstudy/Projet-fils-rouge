window.addEventListener('scroll', () => {
    const header = document.querySelector('Header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});