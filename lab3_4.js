const user = {
    name: "John"
    };
    // это будет работать? - будет, const защищает только переменную user
    user.name = "Pete";
    // а это? - а это не будет, 
    // так как мы уже изменяем не содержимое объекта, 
    // а саму переменную
    user = 123;
