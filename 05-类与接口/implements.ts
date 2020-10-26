// !类于接口
// *Security 和 Door 都想实现报警功能, 但是不能继承同意父类 这时候就用到了 implements, 定义一个报警接口,让两个类同时实现这个接口

interface IAlarm {
    alert(): void
}

class Car {
    constructor() {
    }
}
class Security extends Car implements IAlarm{
    constructor() {
        super()
    }
    alert() {
        console.log('Security Alert');
    }

}


class Door implements IAlarm{
    alert() {
        console.log('Door Alert');
        
    }
}

// !补充
// *一个类可以实现多个接口
// *接口与接口之间可以是继承关系