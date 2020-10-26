// !ES6中的 class
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi());


// !类的继承
class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom


// !getter 和 setter
console.log('-------------------------------------------getter 和 setter');
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}

let b = new Animal1('Kitty'); // setter: Kitty
b.name = 'Tom'; // setter: Tom
console.log(b.name); // Jack


// !静态方法
// *通过 static 定义的静态方法, 类可以直接访问
console.log('-------------------------------------------静态方法');
class Animal2 {
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let c = new Animal2('Jack');
Animal.isAnimal(c); // true
c.isAnimal(c); // TypeError: c.isAnimal is not a function