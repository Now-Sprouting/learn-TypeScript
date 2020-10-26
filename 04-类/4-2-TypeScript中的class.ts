// !TypeScript 中的类
// !public
class Animal3 {
    public name;
    public constructor(name) {
        this.name = name;
    }
}

let d = new Animal3('Jack');
console.log(d.name); // Jack
d.name = 'Tom';
console.log(d.name); // Tom

// !private
class Animal4 {
    private name;
    public constructor(name) {
        this.name = name;
    }
}

let e = new Animal4('Jack');
console.log(e.name); //*属性“name”为私有属性，只能在类“Animal4”中访问
e.name = 'Tom';

// *使用 private 修饰的属性或方法，在子类中也是不允许访问的：
class Animal5 {
    private name;
    public constructor(name) {
        this.name = name;
    }
}

class Cat1 extends Animal5 {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}
// !protected
class Animal6 {
    protected name;
    public constructor(name) {
        this.name = name;
    }
}

class Cat2 extends Animal6 {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}

// !补充
// * 当构造函数修饰为 private 时，该类不允许被继承或者实例化
// * 当构造函数修饰为 protected 时，该类只允许被继承

