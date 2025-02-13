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





// Получаем все элементы аудиоплееров
const audioPlayers = document.querySelectorAll('.audio-player');
let currentlyPlaying = null; // Переменная для отслеживания текущего аудиоплеера

audioPlayers.forEach(player => {
    const audio = player.querySelector('.audio');
    const playPauseBtn = player.querySelector('.play-btn');
    const volumeSlider = player.querySelector('.volume-slider');
    const playIcon = playPauseBtn.querySelector('.play-icon');

    // Проверка на существование элементов
    if (!audio || !playPauseBtn || !playIcon || !volumeSlider) {
        console.error("One or more elements are missing in the audio player.");
        return;
    }

    // Обработчик клика по кнопке воспроизведения/паузы
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Останавливаем текущий играющий плеер, если он есть
            if (currentlyPlaying && currentlyPlaying !== audio) {
                currentlyPlaying.pause();
                currentlyPlaying.closest('.audio-player')
                    .querySelector('.play-icon').textContent = "▶";
            }

            // Запускаем текущий
            audio.play();
            playIcon.textContent = "⏸";
            currentlyPlaying = audio; // Запоминаем текущий играющий плеер
        } else {
            audio.pause();
            playIcon.textContent = "▶";
            currentlyPlaying = null;
        }
    });

    // Обработчик изменения громкости
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
    });
});
