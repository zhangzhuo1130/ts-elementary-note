// -------------- 基本类型 ---------------

// 字符串
let str: string = 'aaa';
let str2 = 'aaa';
let str3: string;
str3 = 'op';
// 数字
let num: number = 99
// 布尔类型
let boo: boolean = true
// null
let n: null = null
// undefine
let un: undefined = undefined

// 特殊类型any，可以设置变量为任何类型不会报错
let test: any = true

// 一维数组
let arr: string[] = ['a', 'n']
// 二维数组
let arr2: string[][] = [['aa', 'bb'], ['cc']]

//元祖
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['a', 'b']]

// ----------------- Enum枚举 -----------


// 例如：开直播 api -> 提取直播状态
// 成功 失败 直播中
// 0 -1 1

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const staus = LiveStatus.FAIL
console.log('status', staus)

// ----------------- Union -----------

let aaa: number | string;
aaa = 100
aaa = 'str'

// ----------------- Type -----------

type A = number | string
type B = boolean | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1 = true
b1 = 'str'


// ---------------- interface -----------
// interface可扩充，可以继承原有的内容继续新增新内容
interface User {
    name: string,
    age: number
}

// ---------------- object -----------
// type不可扩充
type Card = {
    name: string,
    desc: string
}
interface Card2 {
    name: string,
    desc: string
}
// age?,问号表示当前变量是一个可选的类型，下面的 obj不填入也不会报错，反之不加？就会强制报错
interface Card2 {
    age?: number
}

const obj: Card2 = {
    name: 'ops',
    desc: 'desc'
}

// ---------------- function -----------
// 参数
// function hello (){}
//return 类型为 string
function hello(a: string, b: string) {
    return a + b
}
// return 类型为 number
function hello2(a: string, b: string): number {
    console.log(a, b);
    return 999
}

function hello3(a: number, b: boolean, c: string) {
    return 100
}

//undefined
function test2(a: number) {
    console.log(a)
}
// 可选参数必须放在必选参数后面，可选参数带有？
function hello4(name: string, age?: number) {
    if (age === undefined) return -1
    test2(age)
    return
}

// 箭头函数

const func = () => { }
const func2 = () => {
    return 1
}

// ---------------- 断言 unknown -----------
/**
 * {
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
 */
type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}
const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
type Bate = {
    name: string
}
// 假设 data1是动态的
const bate = data1 as unknown as Bate


// ---------------- class -----------

// private  私有类型,打印live仍会打印出来id
// public  公开类型
// protected  受保护类型

class Live {
    roomName: string
    private id: string
    protected name: string

    constructor(roomname1: string, id1: string, name1: string) {
        console.log('建立直播中....')
        this.roomName = roomname1;
        this.id = id1;
        this.name = name1;
    }
}

class CarLive extends Live {
    constructor(roomname1: string, id1: string, name1: string) {
        super(roomname1, id1, name1)
    }

    start() {
        super.name
        // super.id
    }
}

//外面
const live = new Live('1号', '00001', 'op')
console.log('live', live)

const carLive = new CarLive('1号', '00001', 'op')
console.log('carLive', carLive)


class Live2 {
    // # 会让name 变成私有变量
    #name
    constructor(name: string) {
        this.#name = name
    }
}

const live2 = new Live2('live2')
console.log('live2', live2)


interface CarProps {
    name: string
    age: number
    start: () => void
}

class Car implements CarProps {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    start() { }
}


// ---------------- 泛型 -----------

function print<T>(data: T) {
    console.log('泛型data', data)
}
print<number>(999)
print<string>('ops')

class Print<T> {
    data: T
    constructor(d: T) {
        this.data = d
    }
}

const p = new Print<number>(999)
const p1 = new Print<string>('str')
console.log('泛型p', p)
console.log('泛型p', p1)

// ---------------- Utility -----------

// Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// key:catName
// value:catInfo
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};

console.log('--Utility---Record---', cats)


//Pick :从现有的interface建立出全新的类型，可以复用interface
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};

todo;

// Omit ：运用除了description的全部interface
interface Todo2 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2: TodoPreview2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};






