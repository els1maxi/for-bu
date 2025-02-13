// Обработчик для кнопки "Sure"
document.getElementById("sure-button").addEventListener("click", function () {
    // Скрываем текущий контейнер
    document.querySelector(".content").style.display = "none";

    // Показываем новый контейнер с временем
    document.getElementById("time-container").style.display = "flex";

    // Запускаем отсчёт времени
    startTimeCounter();

    // Через 3 секунды запускаем показ сообщений
    setTimeout(showMessages, 1000);
});

// Список сообщений
const messages = [
    "Помнишь, как мы впервые встретились?",
    "У нас столько воспоминаний!",
    "Ты – мой человек!",
    "Спасибо, что ты рядом!",
    "За ещё больше времени вместе!",
    "Ты моя душа!",
    "Навсегда и всегда!",
    "Моя любимая история – это наша!",
    "Ты – лучшее, что со мной случалось!",
    "Дорожу каждым моментом!"
];


// Функция для показа сообщений
function showMessages() {
    messages.forEach((message, index) => {
        setTimeout(() => {
            createMessage(message);
        }, index * 1300); // Каждое сообщение появляется через 1.5 секунды после предыдущего
    });

    // После завершения показа всех сообщений показываем кнопку
    setTimeout(() => {
        document.getElementById("forever-button").style.display = "block";
    }, messages.length * 1500); // Общее время показа всех сообщений + 3 секунды
}

// Функция для создания сообщения
function createMessage(text) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = text;

    // Позиционируем сообщение в случайном месте
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const xPos = Math.random() * (screenWidth - 200); // Учитываем ширину сообщения
    const yPos = Math.random() * (screenHeight - 100); // Учитываем высоту сообщения

    messageBox.style.left = `${xPos}px`;
    messageBox.style.top = `${yPos}px`;

    document.body.appendChild(messageBox);

    // Удаляем сообщение после завершения анимации
    setTimeout(() => {
        messageBox.remove();
    }, 2800); // Сообщение исчезает через 3 секунды
}

// Функция для отсчёта времени
function startTimeCounter() {
    const startDate = new Date("2022-11-22T00:00:00"); // Начальная дата

    function getDateDiff(startDate, endDate) {
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            let previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        let diffMs = endDate - startDate;
        let hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        return { years, months, days, hours, minutes, seconds };
    }

    function updateTime() {
        const now = new Date();
        const { years, months, days, hours, minutes, seconds } = getDateDiff(startDate, now);

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    // Обновляем каждую секунду
    setInterval(updateTime, 1000);
    updateTime(); // Первый вызов
}


// Обработчик для кнопки "Maybe later"
document.getElementById("maybe-later").addEventListener("click", function () {
    // Скрываем основной контейнер
    document.querySelector(".content").style.display = "none";

    // Показываем бокс "I'll Wait!"
    const waitBox = document.getElementById("wait-box");
    waitBox.style.display = "block";

    // Через 3 секунды скрываем бокс и перенаправляем на другую страницу
    setTimeout(function () {
        waitBox.style.display = "none";
        window.location.href = "../index.html"; // Укажите нужный URL
    }, 3000); // 3000 мс = 3 секунды
});

// Обработчик для кнопки "Click for forever"
document.getElementById("forever-button").addEventListener("click", function () {
    // Скрываем текущий контейнер и кнопку "Click for forever"
    document.getElementById("time-container").style.display = "none";
    document.getElementById("forever-button").style.display = "none";

    // Показываем финальный контейнер
    document.getElementById("final-container").style.display = "flex";
});

// Обработчик для кнопки "Replay"
document.getElementById("replay-button").addEventListener("click", function () {
    // Скрываем финальный контейнер
    document.getElementById("final-container").style.display = "none";

    // Показываем начальный контейнер
    document.querySelector(".content").style.display = "flex";
});

// ==========================hearts-background=====================================
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    const screenWidth = window.innerWidth;
    const xPos = Math.random() * screenWidth;
    heart.style.left = `${xPos}px`;

    const delay = Math.random() * 1.5;
    heart.style.animationDelay = `${delay}s`;

    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 250);