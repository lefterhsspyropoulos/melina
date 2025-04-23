
let musicStarted = false;

function startBackgroundMusic() {
    const music = document.getElementById('bgMusic');
    if (music && music.paused && !musicStarted) {
        music.volume = 0;
        music.play().then(() => {
            musicStarted = true;
            let vol = 0;
            const fade = setInterval(() => {
                vol += 0.02;
                music.volume = Math.min(vol, 0.4);
                if (vol >= 0.4) clearInterval(fade);
            }, 100);
        }).catch(err => {
            console.warn('Autoplay failed:', err);
        });
    }
}

window.addEventListener('click', startBackgroundMusic);
window.addEventListener('touchstart', startBackgroundMusic); // for mobile

window.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('mainImage');
    const btn = document.getElementById('dropButton');

    setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, 2200);
});

document.getElementById('dropButton').addEventListener('click', function () {
    const img = document.getElementById('mainImage');
    const btn = this;
    const sound = document.getElementById('chimeSound');

    img.style.animation = 'none';
    img.offsetHeight;
    img.style.transition = 'opacity 0.8s ease';
    img.style.opacity = '0';

    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';

    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        const hiddenMessage = document.getElementById('hiddenMessage');
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.opacity = '1';
        hiddenMessage.style.transform = 'translateY(0)';
        startConfetti();
    }, 500);
});

function startConfetti() {
    const container = document.querySelector('.confetti-container');
    const emojis = ['💖','💗','💓','💞','💕','💘','🎀','🌸','🎉','🎊','✨','🩷','❤️','🤍'];

    setInterval(() => {
        const count = Math.floor(Math.random() * 3) + 2;

        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('span');
            emoji.classList.add('confetti');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            const randomLeft = Math.random() * 100;
            const randomRotate = Math.floor(Math.random() * 360);
            const randomXDrift = (Math.random() * 20 - 10).toFixed(2) + 'vw';

            emoji.style.left = `${randomLeft}vw`;
            emoji.style.top = `-2em`;
            emoji.style.setProperty('--x', randomXDrift);
            emoji.style.setProperty('--r', `${randomRotate}deg`);

            container.appendChild(emoji);
            setTimeout(() => emoji.remove(), 4000);
        }
    }, 200);
}
// Make sure this is at the bottom of script.js
window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');

    const tryPlay = () => {
        if (music && music.paused) {
            music.volume = 0;
            const fade = () => {
                let vol = 0;
                const fadeInterval = setInterval(() => {
                    vol += 0.02;
                    music.volume = Math.min(vol, 0.4);
                    if (vol >= 0.4) clearInterval(fadeInterval);
                }, 100);
            };

            music.play().then(fade).catch((err) => {
                console.warn("Autoplay blocked, waiting for interaction", err);
                // Wait for user interaction
                const resume = () => {
                    music.play().then(fade);
                    window.removeEventListener('click', resume);
                    window.removeEventListener('touchstart', resume);
                };
                window.addEventListener('click', resume);
                window.addEventListener('touchstart', resume);
            });
        }
    };

    tryPlay();
});
