let animal = {
    jumps: null
    };
    let rabbit = {
    __proto__: animal,
    jumps: true
    };
    console.log(rabbit.jumps); // (1) у rabbit есть свойство jumps
    delete rabbit.jumps;
    console.log(rabbit.jumps); // (2) теперь у rabbit нет свойства jumps, но мы указали proto для наследования jumps из animal, поэтому значение равно null
    delete animal.jumps;
    console.log(rabbit.jumps); // (3) теперь у нас нет ничего