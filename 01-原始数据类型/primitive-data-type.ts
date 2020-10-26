// !1.boolean
let isDown: boolean = true;
// *注: 构造函数 new Boolean创建的是一个 Boolean对象
// let isTrue: boolean = new Boolean(true)
// *通过 Boolean直接创建的是boolean类型
let isFalse: boolean = Boolean(true); 

// !2.number
let num: number = 12;

// !3.string
let str: string = 'hello'
let str1: string = `the number is ${num}`

// !4.null & undefined
let n: null = null;
let u: undefined = undefined;
// * 注: null 和 undefined 是所有类型的子类型,所以下面的赋值是合法的
let age: number = null;
let firstName: string = undefined;

// !5.any
let anyThing: any = 123;
anyThing = 'hello'
// * 可以在 any 类型上面访问任意的值和方法
anyThing.num;
anyThing.sayHello;
// *未声明的类型的变量默认是 any 类型

// !6.类型推论
// *如下
let lastName = 'Curry'
// *等价于
// let lastName:string = 'Curry'

// !7.联合类型
// *当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// *联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let people: string | number = 12
people = '12';
people.length;

