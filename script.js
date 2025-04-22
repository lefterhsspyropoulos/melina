document.getElementById('dropButton').addEventListener('click', function () {
    document.getElementById('mainImage').style.opacity = '0';
    this.style.opacity = '0';

    setTimeout(() => {
        const hiddenMessage = document.getElementById('hiddenMessage');
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.opacity = '1';
        hiddenMessage.style.transform = 'translateY(0)';

        startConfettiRain();
    }, 500);
});

function startConfettiRain() {
    const emojiContainer = document.querySelector('.emoji-container');
    const emojis = ['🎉', '🎈', '🎊', '✨', '🤩', '🥳', '💖', '💫'];

    setInterval(() => {
        // Spawn 5–10 emojis per cycle
        const count = Math.floor(Math.random() * 6) + 5;

        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('span');
            emoji.classList.add('celebratory-emoji');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

            const randomLeft = Math.random() * 50; // 0 to 100vw
            const randomRotate = Math.floor(Math.random() * 720 - 360);
            const randomXDrift = Math.floor(Math.random() * 300 - 150) + 'px';
            const randomSize = Math.random() * 1.5 + 0.8; // Scale between 0.8x to 2.3x

            emoji.style.left = `${randomLeft}vw`;
            emoji.style.top = '-2em';
            emoji.style.setProperty('--x', randomXDrift);
            emoji.style.setProperty('--r', `${randomRotate}deg`);
            emoji.style.opacity = '1';
            emoji.style.transform = `scale(${randomSize})`;

            emojiContainer.appendChild(emoji);

            // Clean up after 3s
            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }
    }, 150); // More frequent rain (every 150ms)
}
function startConfettiRain() {
    const emojiContainer = document.querySelector('.emoji-container');
    const emojis = ['🎉', '🎈', '🎊', '✨', '🤩', '🥳', '💖', '💫'];

    setInterval(() => {
        const count = Math.floor(Math.random() * 6) + 5;

        for (let i = 0; i < count; i++) {
            const emoji = document.createElement('span');
            emoji.classList.add('celebratory-emoji');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

            const randomLeft = Math.random() * 50; // 0 to 100vw
            const randomRotate = Math.floor(Math.random() * 720 - 360); // -360° to 360°
            const randomXDrift = (Math.random() * 20 - 10).toFixed(2) + 'vw'; // -10vw to +10vw
            const randomSize = Math.random() * 1.5 + 0.8;

            emoji.style.left = `${randomLeft}vw`;
            emoji.style.top = '-2em';
            emoji.style.setProperty('--x', randomXDrift);
            emoji.style.setProperty('--r', `${randomRotate}deg`);
            emoji.style.opacity = '1';
            emoji.style.transform = `translateY(-50%) scale(${randomSize})`;

            emojiContainer.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }
    }, 150);
}

emoji.style.left = `${randomLeft}vw`;
emoji.style.top = '-2em';
emoji.style.setProperty('--x', randomXDrift);
emoji.style.setProperty('--r', `${randomRotate}deg`);
emoji.style.opacity = '1';
