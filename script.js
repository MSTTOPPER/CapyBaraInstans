// Массив с названиями звуковых файлов (без расширения)
const soundFiles = ['600_700_km_na_skeyte', 'aaaaaaa', 'blin_krysa', 'blya_poigray', 'bolshaya_u_slona'];

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

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Пауза';
    pauseButton.onclick = pauseSound;

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Стоп';
    stopButton.onclick = stopSound;

    soundCard.appendChild(soundName);
    soundCard.appendChild(playButton);
    soundCard.appendChild(pauseButton);
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

function pauseSound() {
  if (currentAudio) {
    currentAudio.pause();
  }
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
