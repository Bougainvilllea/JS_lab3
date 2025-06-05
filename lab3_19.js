// Базовый класс Clock для работы с временем
class Clock {
    // Конструктор принимает шаблон для вывода времени
    constructor(template) {
        // Сохраняем шаблон в свойстве объекта
        this.template = template;
    }

    // Метод для отображения текущего времени по шаблону
    render() {
        // Создаем объект Date для получения текущего времени
        let date = new Date();
        
        // Получаем часы и добавляем ведущий ноль, если меньше 10
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        // Получаем минуты и добавляем ведущий ноль, если меньше 10
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        
        // Получаем секунды и добавляем ведущий ноль, если меньше 10
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        
        // Заменяем в шаблоне символы на соответствующие значения времени
        let output = this.template
            .replace('h', hours)  // Заменяем 'h' на часы
            .replace('m', mins)   // Заменяем 'm' на минуты
            .replace('s', secs); // Заменяем 's' на секунды
        
        // Выводим результат в консоль
        console.log(output);
    }

    // Метод для остановки часов (очистка интервала)
    stop() {
        clearInterval(this.timer);
    }

    // Метод для запуска часов
    start() {
        // Сразу вызываем render() для первого отображения
        this.render();
        // Устанавливаем интервал для обновления времени каждую секунду (1000 мс)
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// Расширенный класс часов с возможностью настройки интервала обновления
class ExtendedClock extends Clock {
    // Конструктор принимает шаблон и интервал обновления (по умолчанию 1000 мс)
    constructor(template, precision = 1000) {
        // Вызываем конструктор родительского класса с шаблоном
        super(template);
        // Сохраняем интервал обновления в свойстве объекта
        this.precision = precision;
    }

    // Переопределяем метод start() для использования своего интервала
    start() {
        // Сразу вызываем render() для первого отображения
        this.render();
        // Устанавливаем интервал с заданной точностью (precision)
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

// Пример использования базового класса (закомментирован)
// let clock = new Clock("h m s");
// clock.start();

// Создаем экземпляр ExtendedClock с интервалом обновления 500 мс (0.5 секунды)
let fastClock = new ExtendedClock("h:m:s", 500); 
// Запускаем часы
fastClock.start();
