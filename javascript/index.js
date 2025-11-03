async function loadPrism() {
    const theme = document.createElement('link');
    theme.rel = 'stylesheet';
    theme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(theme);

    const wait = el => new Promise(res => el.onload = res);

    const core = document.createElement('script');
    core.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    document.head.appendChild(core);
    await wait(core);

    const jsLanguage = document.createElement('script');
    jsLanguage.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js';
    document.head.appendChild(jsLanguage);
    await wait(jsLanguage);
}

async function fetchGuide() {
    const res = await fetch("https://raw.githubusercontent.com/bryantchacon/bryantchacon.github.io/refs/heads/main/00_js.js");
    const text = await res.text();

    const guide = document.querySelector(".language-javascript");
    guide.textContent = text;
    Prism.highlightElement(guide);
}

function topButton() {
    const btnTop = document.querySelector('.top-button');

    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function toggleWrap() {
    const btn = document.querySelector('.toggle-wrap');
    const btnIcon = document.querySelector('.fa-align-justify');
    const guide = document.querySelector('.guide');

    btn.addEventListener('click', () => {
        const y = window.scrollY;
        guide.classList.toggle('code-wrap');

        if (btnIcon.classList.contains('fa-align-justify')) {
            btnIcon.classList.replace('fa-align-justify', 'fa-align-left');
        } else {
            btnIcon.classList.replace('fa-align-left', 'fa-align-justify');
        }

        window.scrollTo(0, y);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadPrism();
    await fetchGuide();
    toggleWrap();
    topButton();
});
