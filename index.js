async function loadFont() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(link);
}

async function loadFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css';
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadFont();
    await loadFontAwesome();

    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.main-nav__list');
    const icon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
});

document.querySelectorAll('.main-nav a, .social i, .portfolio-projects img').forEach(el => {
    el.addEventListener('touchstart', () => {
        el.classList.add('hover');
    });
    el.addEventListener('touchend', () => {
        setTimeout(() => el.classList.remove('hover'), 300);
    });
});
