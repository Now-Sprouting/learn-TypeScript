// 1、类型断言使用场景：把比较宽泛的类型转换成一个具体的类型
// <img id='ding' />
const el = document.getElementById('ding') as HTMLImageElement
el.src = 'http://local.jd.com'



// 2、多态
class Person {

}

class Student {
    studying() {

    }
}
function seyHello(p: Person) {
    // console.log(p.studying());
    (p as Student).studying()
}

const stu = new Student()
seyHello(stu)


// 3.逃过编译
let message = 'hello'
const num = 12
message = num as any as string
message = num as unknown as string
