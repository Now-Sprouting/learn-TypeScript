// 1.数组的弊端
const arr: any[] = ['zhangsan', 123]
const name = arr[0]

// 这个时候 name会被认为是 any类型
console.log(name.length);


// 2.元组的使用
const info: [string, number, boolean] = ['hello', 12, true]
console.log(info[0].length);


export { }

