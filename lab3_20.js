// Класс Stock представляет склад коробок
class Stock {
    // Конструктор класса, инициализирует начальные свойства
    constructor() {
        this.boxes = []; // Массив для хранения коробок
        this.serialNumber = 0; // Уникальный серийный номер для каждой новой коробки
    }

    // Метод для добавления новой коробки на склад
    add(w, v) {
        // Создаем объект коробки с указанными параметрами
        const box = {
            serial: this.serialNumber++, // Уникальный серийный номер (и увеличиваем счетчик)
            weightCapacity: w, // Максимальный вес, который выдерживает коробка
            volumeCapacity: v, // Максимальный объем, который выдерживает коробка
            addedTime: Date.now() // Время добавления коробки (текущее время в мс)
        };
        // Добавляем коробку в массив boxes
        this.boxes.push(box);
    }

    // Метод для поиска и извлечения коробки по минимальному весу
    getByW(min_w) {
        // Фильтруем коробки, оставляя только те, которые выдерживают минимальный вес min_w
        let candidates = this.boxes.filter(box => box.weightCapacity >= min_w);
        
        // Если подходящих коробок нет, возвращаем -1
        if (candidates.length === 0) 
            return -1;
   
        // Сортируем подходящие коробки:
        // 1. Сначала по весу (от меньшего к большему)
        // 2. Если веса равны - по времени добавления (раньше добавленные сначала)
        candidates.sort((a, b) => {
            if (a.weightCapacity !== b.weightCapacity) {
                return a.weightCapacity - b.weightCapacity;
            }
            return a.addedTime - b.addedTime;
        });
        
        // Выбираем первую коробку из отсортированного списка (наименьший подходящий вес)
        const selected = candidates[0];
        // Удаляем выбранную коробку из склада
        this._removeBox(selected.serial);
        // Возвращаем серийный номер выбранной коробки
        return selected.serial;
    }

    // Метод для поиска и извлечения коробки по минимальному объему (аналогично getByW)
    getByV(min_v) {
        // Фильтруем коробки по минимальному объему
        let candidates = this.boxes.filter(box => box.volumeCapacity >= min_v);
        
        // Если нет подходящих коробок, возвращаем -1
        if (candidates.length === 0) return -1;
        
        // Сортируем коробки:
        // 1. Сначала по объему (от меньшего к большему)
        // 2. Если объемы равны - по времени добавления
        candidates.sort((a, b) => {
            if (a.volumeCapacity !== b.volumeCapacity) {
                return a.volumeCapacity - b.volumeCapacity;
            }
            return a.addedTime - b.addedTime;
        });
        
        // Выбираем первую коробку из отсортированного списка
        const selected = candidates[0];
        // Удаляем выбранную коробку
        this._removeBox(selected.serial);
        // Возвращаем серийный номер
        return selected.serial;
    }

    // Вспомогательный метод для удаления коробки по серийному номеру
    _removeBox(serial) {
        // Фильтруем массив, оставляя только коробки с несовпадающим серийным номером
        this.boxes = this.boxes.filter(box => box.serial !== serial);
    }
}

// Функция для тестирования класса Stock
function testStock() {
    // Создаем экземпляр склада
    const stock = new Stock();
    
    // Добавляем несколько коробок с разными параметрами (вес, объем)
    stock.add(10, 5); // Коробка 0: вес 10, объем 5
    stock.add(15, 3); // Коробка 1: вес 15, объем 3
    stock.add(20, 8); // Коробка 2: вес 20, объем 8
    stock.add(10, 7); // Коробка 3: вес 10, объем 7
    stock.add(15, 10); // Коробка 4: вес 15, объем 10
    
    // Тестируем выбор коробок по весу
    console.log(stock.getByW(10)); // Должна вернуть коробку 0 (вес 10)
    console.log(stock.getByW(12)); // Должна вернуть коробку 1 (вес 15 - минимальный >=12)
    console.log(stock.getByW(15)); // Должна вернуть коробку 4 (вес 15, добавлена позже 1)
    console.log(stock.getByW(25)); // Нет подходящих - вернет -1
    
    // Тестируем выбор коробок по объему
    console.log(stock.getByV(5));  // Вернет коробку 0 (объем 5)
    console.log(stock.getByV(8));  // Вернет коробку 2 (объем 8)
    console.log(stock.getByV(10)); // Вернет коробку 4 (объем 10)
    console.log(stock.getByV(2));  // Вернет коробку 1 (объем 3 - минимальный >=2)
    console.log(stock.getByV(15)); // Нет подходящих - вернет -1
    
    // Выводим количество оставшихся коробок
    console.log("Осталось коробок:", stock.boxes.length); 
}

// Запускаем тестирование
testStock();
