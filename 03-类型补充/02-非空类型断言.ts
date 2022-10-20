function printMessage(message?: string) {
    // console.log(message.length);
    // 上述代码不能通过校验

    // 1、if 缩小代码块
    if (message) {
        console.log(message.length);
    }

    // 2、非空类型断言(代表message一定存在,可以顺利通过编译)
    console.log(message!.length);
}

printMessage('hello')