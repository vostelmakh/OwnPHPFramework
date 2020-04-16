// 1. Создаём новый аудиообъект на странице
var audio = new Audio();
// 2. Подготавливаем звук, чтобы он сразу был готов к воспроизведению
audio.preload = 'auto';
// 3. Указываем путь к аудиофайлу
audio.src = '\\public\\assets\\Sound_04684.mp3';
// 4. Говорим, чтобы играл по кругу
//audio.loop = true;
// 5. Жмём виртуальную кнопку «Плей»
audio.play();