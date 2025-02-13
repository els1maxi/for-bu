function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Сердечко
    heart.classList.add('heart');

    // Случайная позиция по горизонтали
    const xPos = Math.random() * window.innerWidth;
    heart.style.left = `${xPos}px`;

    // Случайная задержка анимации
    const delay = Math.random() * 2;
    heart.style.animationDelay = `${delay}s`;

    // Добавляем сердечко в контейнер
    document.getElementById('hearts-container').appendChild(heart);

    // Удаляем сердечко после завершения анимации
    setTimeout(() => {
        heart.remove();
    }, 5000); // 5000ms = 5s (длительность анимации)
}

// Создаём сердечки каждые 300ms
setInterval(createHeart, 250);