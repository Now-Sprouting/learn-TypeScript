// !不使用泛型约束的问题
// *因为泛型中可以传入任意类型, 所以当 调用 arg.length时会报错
function loggingIdentify<T>(arg: T): T {
    console.log(arg.length);
    return arg
}
loggingIdentify([1, 2, 3])



// !使用泛型约束
interface ILengthWith {
    length: number
}
function loggingIdentify1<T extends ILengthWith>(arg: T): T {
    console.log(arg.length);
    return arg
}
loggingIdentify1([1, 3])
loggingIdentify1(123123)


