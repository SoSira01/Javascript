// import ทุกตัวที่ export มาจากไฟล์ที่ชื่อว่า function.js เเละ rename เป็น test
import * as test from "./function.js"

// เมื่อเรียกใช้ function ที่ import เข้ามา จะต้องเรียกผ่าน test
let order1 = test.orderDetail(["coke"])
console.log("Print ------------------------")
order1("print");

console.log("Add item ------------------------")
order1("add", "apple");
order1("print");

console.log("Remove item ------------------------")
order1("remove", "coke");
order1("print")

test.courseList("INT201", "Umaporn", "Spy", "Ice", "Chit", "So", "Tee")
console.log("---------------------------------------")


test.courseList("INT202", undefined, "Lisa", "Jenny", "Jisoo", "Rose")
console.log("---------------------------------------")


test.courseList(undefined, "Siam", "Cat", "Peter", "Bob", "Alice")
console.log("--------------------------------------")