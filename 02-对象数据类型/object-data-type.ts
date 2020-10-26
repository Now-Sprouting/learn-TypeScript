// !1.数组
// *1.正常定义
let friends: string[] = ['andy', 'bob']
friends.push('red')
// *不能插入其他数据类型的数据
// friends.push(23)

// *2.泛型定义
let numbers:Array<number> = [1,2,3]

// *3.接口


// !2.元组
let tom: [string, number] = ['tom', 23];
// *可以通过索引值赋值
let jerry:[string, number]
jerry[0] = 'jerry'
jerry[1] = 23


// *对变量直接赋值时,必须提供元组类型指定的项
let andy: [string, number]
// *报错
// andy = ['andy']

// *不能越界
// *报错
// andy.push(true)




