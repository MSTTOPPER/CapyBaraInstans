// Массив с названиями звуковых файлов (без расширения)
const soundFiles = ['Мемные стоны', 'Мне нужны булочки', 'Гадалка аза', 'Тихий омут', 'Собес в ребро', 'Все для тарасов', 'Мой отец заставил сниматся', 'Гимн квадроберов', 'Ёбки', 'Сосу за робуксы', 'Что за малолетка', 'Меня собаки и трое мужчин', 'Стоны ремикс', 'Стоны грустный ремикс', 'Щаааяаяаяаяа', 'Мне кажется я', 'Мужлан однкл', 'Компания суперсел почеву в вашей тупой игре', 'Конечно сосала', 'Крик дяди богдана', 'Сакин кок', 'Пидорасы', 'Дочь милеонера пришла домой', 'Я героиновый наркоман', 'В этом контейнере пэнсил', 'Моя кошка готова', 'Сматываем удочки писает мой сын', 'Подумаешь ну сосала', 'Может раф', 'Саша фары', 'Это не просто', 'А когда ты уже парик снимешь', 'Черным по белому написано гойдаааа', 'Я насрал в турбину самолета', 'Шо побежал к мамочке жаловатся', 'Зай дак ты', 'Дурова арестуют', 'У пальто из слово пацана', 'Сколько у тебя см', 'Если у вас фимоз', 'Ты меня еще в жопу', 'До и брюнетки 8 часов', 'Красава морат', 'Ты видишь какие у меня огромные яйца', 'Пишется не пезда', 'Курапов философит', 'Летит на самокате', 'Соловей мой соловей', 'В лаборатории наркотиков', 'О зелебоба', 'Бахните пивка в пятнице', 'Как т арбуз', 'Философия Ивана Золо', 'До слободы доеду', 'Скоро больше!'];

// Функция для отображения звуков на странице
function displaySounds() {
  const soundGrid = document.getElementById('sound-grid');
  soundGrid.innerHTML = ''; // Очищаем перед добавлением

  soundFiles.forEach(soundFile => {
    const soundCard = document.createElement('div');
    soundCard.classList.add('sound-card');
    
    const soundName = document.createElement('p');
    soundName.textContent = soundFile.replace(/_/g, ' ');  // Замена подчеркиваний на пробелы

    const playButton = document.createElement('button');
    playButton.textContent = 'Играть';
    playButton.onclick = () => playSound(`sounds/${soundFile}.mp3`);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Стоп';
    stopButton.onclick = stopSound;

    soundCard.appendChild(soundName);
    soundCard.appendChild(playButton);
    soundCard.appendChild(stopButton);

    soundGrid.appendChild(soundCard);
  });
}

// Функции для управления воспроизведением звуков
let currentAudio = null;

function playSound(src) {
  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = new Audio(src);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

// Вызываем функцию отображения при загрузке страницы
displaySounds();

// Обновляем звуки каждые 60 секунд (если требуется)
setInterval(displaySounds, 60000);
