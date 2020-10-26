// !泛型
// *泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
// !为什么需要泛型
// *下面这种情况会出现一种 bug add(1, 2) 的返回值类型为 number 而我们却可以吧 result 赋值成 number
function add(x: number, y: number): any {
    return x + y
}

const result:string = add(1, 2)

// !引入泛型
// *引入泛型后上面的问题也就解决了
function echo<T>(arg: T): T {
    return arg
}
const result1:string = echo(12)


// !多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]