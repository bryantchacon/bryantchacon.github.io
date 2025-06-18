async function loadFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
    document.head.appendChild(link);
}

async function loadImages() {
    const imgs = document.querySelectorAll('#Portfolio img, #Stack img');
    imgs.forEach(img => {
        const src = img.getAttribute('src');
        const newImg = new Image();
        newImg.src = src;
        newImg.onload = () => {
            img.src = src;
        };
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    // const element = document.querySelector('.name-and-description');
    // element.style.backgroundImage = 'url(https://png.pngtree.com/thumb_back/fh260/background/20211217/pngtree-1920-promotional-poster-background-image_923117.jpg)';
    // element.style.maskImage = 'linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)';

    await loadFontAwesome();
    await loadImages();
});
