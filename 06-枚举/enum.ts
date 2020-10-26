// !枚举
// !初体验
enum Dirction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
// *默认枚举第一项会被赋值成 0
console.log(Dirction.UP); /* 0 */
// *枚举也支持反向映射
console.log(Dirction[0]); /* UP */


// !手动赋值
// *未手动赋值的枚举项会接着上一个枚举项递增。
// *手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)


