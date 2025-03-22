class Animal {
    constructor(name) {
        this.name = name;
        }
    }
    class Rabbit extends Animal {
        constructor(name) {
            super(name); // Конструкторы в наследуемых классах должны обязательно 
            // вызывать super(...) , и (!) делать это перед использованием this, 
            // в противном случае объект для  this не будет создан, и мы получим ошибку
            this.created = Date.now();
        }
    }
    let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
    console.log(rabbit.name);
    