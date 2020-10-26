// !不引入泛型类出现的问题
// *下面程序 运行 tsc 编译成 js 文件后运行会出现错误 因为 toFixed 是 number 类型所特有的方法, 但是 typescript在编译时检测不出来
class Queue {
    private data = []
    push(item) {
        return this.data.push(item)
    }
    pop() {
        return this.data.pop()
    }
}
const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());



// !引入泛型
class Queue1 <T>{
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.pop()
    }
}
const queue1 = new Queue1<number>()
queue1.push(1)
queue1.push('str')
console.log(queue1.pop().toFixed());
console.log(queue1.pop().toFixed());

