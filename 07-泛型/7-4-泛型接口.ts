// !泛型接口
interface KeyPair<T, U> {
    key: T;
    value: U
}

let kp1: KeyPair<number, string> = {
    key: 1,
    value: 'str'
}