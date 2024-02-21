document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('animated-heading');
    const text = heading.textContent;
    const splitText = text.split("");

    heading.textContent = "";

    splitText.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.2}s`;
        span.classList.add('char');
        heading.appendChild(span);
    });
});
