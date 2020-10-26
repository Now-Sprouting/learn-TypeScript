// !函数
// *可选参数后面不允许再出现必需参数
const add = (x: number, y: number, z?: number): number => {
    return x + y + z
}
// !参数默认值
// *TypeScript 会将添加了默认值的参数识别为可选参数
// *此时就不受「可选参数必须接在必需参数后面」的限制了
const buildName = (firstName: string, lastName: string='Curry'): string => {
    return firstName + lastName
}
buildName('Seth', 'Curry1')
buildName('Stephen')



// !函数赋值
// *如果将 add 赋值给 add2 需要定义 add2 为函数类型
// *在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let add2: (x: number, y: number, z?: number) => number = add






// !使用接口定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

