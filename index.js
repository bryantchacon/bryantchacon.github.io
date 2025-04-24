async function loadFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadFontAwesome();
});

async function loadImages() {
    const imgs = document.querySelectorAll('#Software img, #CV img');
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
    await loadImages();
});

