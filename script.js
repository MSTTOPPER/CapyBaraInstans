// Массив имен файлов звуков
const sounds = [
    'sound1.mp3',
    'sound2.wav',
    'sound3.ogg',
    // добавь сюда имена остальных звуков
];

// Контейнер для кнопок
const soundBoard = document.querySelector('.sound-board');

// Функция для создания кнопки звука
function createSoundButton(sound) {
    const button = document.createElement('button');
    button.textContent = sound;  // Полное имя файла с расширением
    button.addEventListener('click', () => {
        const audio = new Audio(`sounds/${sound}`);
        audio.play();
    });
    soundBoard.appendChild(button);
}

// Генерация кнопок для каждого звука
sounds.forEach(sound => {
    createSoundButton(sound);
});
