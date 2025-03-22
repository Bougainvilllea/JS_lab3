let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();
  
  console.log(rabbit.full); 
  console.log(animal.full); 

// Поскольку this – это объект, который стоит перед точкой, 
// rabbit.eat() изменяет объект rabbit .
// Поиск свойства и исполнение кода – два разных процесса. 
// Сначала осуществляется поиск метода
// rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.

