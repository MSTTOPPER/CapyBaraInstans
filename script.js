// Массив с названиями звуковых файлов (без расширения)
const soundFiles = ['Мемные стоны', 'Мне нужны булочки', 'Гадалка аза', 'Тихий омут', 'Собес в ребро', 'Все для тарасов', 'Мой отец заставил сниматся', 'Гимн квадроберов', 'Ёбки', 'Сосу за робуксы', 'Что за малолетка', 'Меня собаки и трое мужчин', 'Стоны ремикс', 'Стоны грустный ремикс', 'Щаааяаяаяаяа', 'Мне кажется я', 'Мужлан однкл', 'Компания суперсел почеву в вашей тупой игре', 'Конечно сосала', 'Крик дяди богдана', 'Сакин кок', 'Пидорасы'];

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
