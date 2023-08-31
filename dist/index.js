"use strict";
// -------------- 基本类型 ---------------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
// 字符串
let str = 'aaa';
let str2 = 'aaa';
let str3;
str3 = 'op';
// 数字
let num = 99;
// 布尔类型
let boo = true;
// null
let n = null;
// undefine
let un = undefined;
// 特殊类型any，可以设置变量为任何类型不会报错
let test = true;
// 一维数组
let arr = ['a', 'n'];
// 二维数组
let arr2 = [['aa', 'bb'], ['cc']];
//元祖
let tuple = [1, 'a', true];
let tuple2 = [['a', 'b']];
// ----------------- Enum枚举 -----------
// 例如：开直播 api -> 提取直播状态
// 成功 失败 直播中
// 0 -1 1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["STREAMING"] = 1] = "STREAMING";
})(LiveStatus || (LiveStatus = {}));
const staus = LiveStatus.FAIL;
console.log('status', staus);
// ----------------- Union -----------
let aaa;
aaa = 100;
aaa = 'str';
let a1;
a1 = 999;
a1 = 'str';
let b1;
b1 = true;
b1 = 'str';
const obj = {
    name: 'ops',
    desc: 'desc'
};
// ---------------- function -----------
// 参数
// function hello (){}
//return 类型为 string
function hello(a, b) {
    return a + b;
}
// return 类型为 number
function hello2(a, b) {
    console.log(a, b);
    return 999;
}
function hello3(a, b, c) {
    return 100;
}
//undefined
function test2(a) {
    console.log(a);
}
// 可选参数必须放在必选参数后面，可选参数带有？
function hello4(name, age) {
    if (age === undefined)
        return -1;
    test2(age);
    return;
}
// 箭头函数
const func = () => { };
const func2 = () => {
    return 1;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// 假设 data1是动态的
const bate = data1;
// ---------------- class -----------
// private  私有类型,打印live仍会打印出来id
// public  公开类型
// protected  受保护类型
class Live {
    constructor(roomname1, id1, name1) {
        console.log('建立直播中....');
        this.roomName = roomname1;
        this.id = id1;
        this.name = name1;
    }
}
class CarLive extends Live {
    constructor(roomname1, id1, name1) {
        super(roomname1, id1, name1);
    }
    start() {
        super.name;
        // super.id
    }
}
//外面
const live = new Live('1号', '00001', 'op');
console.log('live', live);
const carLive = new CarLive('1号', '00001', 'op');
console.log('carLive', carLive);
class Live2 {
    constructor(name) {
        // # 会让name 变成私有变量
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2('live2');
console.log('live2', live2);
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
// ---------------- 泛型 -----------
function print(data) {
    console.log('泛型data', data);
}
print(999);
print('ops');
class Print {
    constructor(d) {
        this.data = d;
    }
}
const p = new Print(999);
const p1 = new Print('str');
console.log('泛型p', p);
console.log('泛型p', p1);
// key:catName
// value:catInfo
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log('--Utility---Record---', cats);
const todo = {
    title: "Clean room",
    completed: false,
};
todo;
const todo2 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsTUFBTTtBQUNOLElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQztBQUN4QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7QUFDakIsSUFBSSxJQUFZLENBQUM7QUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNaLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUE7QUFDcEIsT0FBTztBQUNQLElBQUksR0FBRyxHQUFZLElBQUksQ0FBQTtBQUN2QixPQUFPO0FBQ1AsSUFBSSxDQUFDLEdBQVMsSUFBSSxDQUFBO0FBQ2xCLFdBQVc7QUFDWCxJQUFJLEVBQUUsR0FBYyxTQUFTLENBQUE7QUFFN0IsMEJBQTBCO0FBQzFCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQTtBQUVwQixPQUFPO0FBQ1AsSUFBSSxHQUFHLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDOUIsT0FBTztBQUNQLElBQUksSUFBSSxHQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBRTdDLElBQUk7QUFDSixJQUFJLEtBQUssR0FBOEIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3JELElBQUksTUFBTSxHQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFN0MsdUNBQXVDO0FBR3ZDLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osU0FBUztBQUVULElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCw0Q0FBUyxDQUFBO0lBQ1QscURBQWEsQ0FBQTtBQUNqQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUE7QUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFFNUIsc0NBQXNDO0FBRXRDLElBQUksR0FBb0IsQ0FBQztBQUN6QixHQUFHLEdBQUcsR0FBRyxDQUFBO0FBQ1QsR0FBRyxHQUFHLEtBQUssQ0FBQTtBQU9YLElBQUksRUFBSyxDQUFBO0FBQ1QsRUFBRSxHQUFHLEdBQUcsQ0FBQTtBQUNSLEVBQUUsR0FBRyxLQUFLLENBQUE7QUFFVixJQUFJLEVBQUssQ0FBQTtBQUNULEVBQUUsR0FBRyxJQUFJLENBQUE7QUFDVCxFQUFFLEdBQUcsS0FBSyxDQUFBO0FBeUJWLE1BQU0sR0FBRyxHQUFVO0lBQ2YsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJLEVBQUUsTUFBTTtDQUNmLENBQUE7QUFFRCx3Q0FBd0M7QUFDeEMsS0FBSztBQUNMLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUM7QUFDRCxvQkFBb0I7QUFDcEIsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVUsRUFBRSxDQUFTO0lBQzVDLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQztBQUVELFdBQVc7QUFDWCxTQUFTLEtBQUssQ0FBQyxDQUFTO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbEIsQ0FBQztBQUNELHlCQUF5QjtBQUN6QixTQUFTLE1BQU0sQ0FBQyxJQUFZLEVBQUUsR0FBWTtJQUN0QyxJQUFJLEdBQUcsS0FBSyxTQUFTO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDVixPQUFNO0FBQ1YsQ0FBQztBQUVELE9BQU87QUFFUCxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDdEIsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ2YsT0FBTyxDQUFDLENBQUE7QUFDWixDQUFDLENBQUE7QUFpQkQsU0FBZSxPQUFPOztRQUNsQixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO1FBQ3ZFLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBVSxDQUFBO0lBQ3pDLENBQUM7Q0FBQTtBQUNELE1BQU0sS0FBSyxHQUFTO0lBQ2hCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxFQUFFLENBQUM7SUFDUCxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFdBQVcsRUFBRSxLQUFLO0NBQ3JCLENBQUE7QUFJRCxlQUFlO0FBQ2YsTUFBTSxJQUFJLEdBQUcsS0FBd0IsQ0FBQTtBQUdyQyxxQ0FBcUM7QUFFckMsK0JBQStCO0FBQy9CLGVBQWU7QUFDZixtQkFBbUI7QUFFbkIsTUFBTSxJQUFJO0lBS04sWUFBWSxTQUFpQixFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQVEsU0FBUSxJQUFJO0lBQ3RCLFlBQVksU0FBaUIsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUNyRCxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsS0FBSztRQUNELEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDVixXQUFXO0lBQ2YsQ0FBQztDQUNKO0FBRUQsSUFBSTtBQUNKLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFekIsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUcvQixNQUFNLEtBQUs7SUFHUCxZQUFZLElBQVk7UUFGeEIsa0JBQWtCO1FBQ2xCLDhCQUFLO1FBRUQsdUJBQUEsSUFBSSxlQUFTLElBQUksTUFBQSxDQUFBO0lBQ3JCLENBQUM7Q0FDSjs7QUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQVMzQixNQUFNLEdBQUc7SUFJTCxZQUFZLElBQVksRUFBRSxHQUFXO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0lBQ2xCLENBQUM7SUFDRCxLQUFLLEtBQUssQ0FBQztDQUNkO0FBR0Qsa0NBQWtDO0FBRWxDLFNBQVMsS0FBSyxDQUFJLElBQU87SUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDL0IsQ0FBQztBQUNELEtBQUssQ0FBUyxHQUFHLENBQUMsQ0FBQTtBQUNsQixLQUFLLENBQVMsS0FBSyxDQUFDLENBQUE7QUFFcEIsTUFBTSxLQUFLO0lBRVAsWUFBWSxDQUFJO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7SUFDakIsQ0FBQztDQUNKO0FBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQVMsR0FBRyxDQUFDLENBQUE7QUFDaEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQVMsS0FBSyxDQUFDLENBQUE7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFZdEIsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixNQUFNLElBQUksR0FBNkI7SUFDbkMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQ3BDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUN0QyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRTtDQUNuRCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQVkxQyxNQUFNLElBQUksR0FBZ0I7SUFDdEIsS0FBSyxFQUFFLFlBQVk7SUFDbkIsU0FBUyxFQUFFLEtBQUs7Q0FDbkIsQ0FBQztBQUVGLElBQUksQ0FBQztBQVlMLE1BQU0sS0FBSyxHQUFpQjtJQUN4QixLQUFLLEVBQUUsWUFBWTtJQUNuQixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsYUFBYTtDQUMzQixDQUFDIn0=