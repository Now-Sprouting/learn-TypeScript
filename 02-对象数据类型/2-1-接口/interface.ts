// !接口(interface)
// !接口不存在于 JavaScript 中，所以接口并不会转换成 JavaScript的代码， 他的作用是静态类型检测
interface Iperson  {
    name: string;
    age: number
}
// *接口的作用是限制声明的变量的 shap 形状
let bob: Iperson = {
    name: 'bob',
    age: 23
}



// !可选属性
interface IMom {
    name: string;
    age?: number
}
let zhang: IMom = {
    name: 'zhang'
}


// !只读属性
interface IFather {
    readonly id: number;
    name: string
}
let ding: IFather = {
    id: 1,
    name: 'ding'
}
// *报错
// ding.id = 2
// *readonly 和 const 的区别是 readonly 作用在属性上面， const 作用在 变量上面



// !任意属性
interface ISisiter {
    name: string;
    [propName: string] : any
}
let jing: ISisiter = {
    name: 'jing',
    gender : 'female'
}
// *注：需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：