document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const heroContainer = document.querySelector('.hero-container');
    window.addEventListener('scroll', function() {
        const heroHeight = heroContainer.offsetHeight;
        
        // Collapse hero when scrolled past 50% of its height
        if (window.scrollY > heroHeight * 0.5) {
            hero.classList.add('collapsed');
        } else {
            hero.classList.remove('collapsed');
        }
    });
});