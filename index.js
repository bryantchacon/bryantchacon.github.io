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

function hamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.main-nav__list');
    const icon = hamburger.querySelector('i');
    
    const isMenuOpen = () => navList.classList.contains('active');
    
    const openMenu = () => {
        navList.classList.add('active');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    };
    
    const closeMenu = () => {
        navList.classList.remove('active');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    };
    
    hamburger.addEventListener('click', () => {
        isMenuOpen() ? closeMenu() : openMenu();
    });
    
    document.querySelectorAll('.main-nav__item a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    document.addEventListener('click', (e) => {
        const clickedOutside = !navList.contains(e.target) && !hamburger.contains(e.target);
        if (isMenuOpen() && clickedOutside) {
            closeMenu();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen()) {
            closeMenu();
        }
    });
}

function fetchBlog () {
    const mainContainer = document.querySelector('.main-container');
    const blogButton = document.querySelector('.blog-button');
    
    blogButton.addEventListener('click', (e) => {
        e.preventDefault();
        fetch('blog.html')
            .then(response => response.text())
            .then(data => {
                mainContainer.innerHTML = data;
            })
            .catch(error => console.error(error));
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadFont();
    await loadFontAwesome();
    hamburgerMenu();
    fetchBlog();
});
