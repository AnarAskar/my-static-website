// Add sticky navbar functionality
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const hero = document.querySelector('#hero');
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
