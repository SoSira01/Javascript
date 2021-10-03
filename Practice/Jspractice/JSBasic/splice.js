// splice(start) ------------------------------------
// start คือการะบุ index เริ่มตั้นที่จะทำการเปลี่ยนเเปลง (insert, replace, delete)
// ซึ่งการใช้ syntax ที่parameterมีแค่(start) หมายถึงการให้ลบข้อมูลทั้งหมดตั้งเเต่ start เป็นต้นไป

let course = ['INT201', 'INT202', 'LNG202', 'INT214', 'INT205', 'GEN231'];
console.log(`course = ['INT201', 'INT202', 'LNG202', 'INT214', 'INT205', 'GEN231']`);
// delete all element ตั้งเเต่ index ที่ 4 เป็นต้นไป
course.splice(4);

console.log(`course.splice(4) --------`);
console.log(course);

// สามารถระบุ start เป็น negative ได้ ซึ่งจะเป็นการนับจากท้าย array โดยเริ่มที่ -1
// delete all element ตั้งเเต่ตำเเหน่งที่นับจากท้าย array ตัวที่ 2 (index ที่-2)
course.splice(-2);

console.log(`course.splice(-2) --------`);
console.log(course)

//ถ้าหากว่าเราระบุstart เกินกว่าindexใน array ก็จะไม่มีการdelete elementใดๆ เกิดขึ้นในarrayนั้น
course.splice(6);

console.log(`course.splice(6) --------`);
console.log(course);

console.log('-------------------------------------------------------------');
// splice(start, deleteCount) --------------------------------------
// deleteCount คือการบอกจำนวน element ที่ต้องการลบ
let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(`days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']`);

// delete 1 element โดยเริ่มที่ index ที่ 2
days.splice(2,1);

console.log(`days.splice(2,1) --------`);
console.log(days);

// delete 3 element โดยเริ่มจาก index ที่ 3
days.splice(3,3);

console.log(`days.splice(3,3) --------`);
console.log(days);

// delete 2 element โดยเริ่มจาก index ที่ -2
days.splice(-2,2);

console.log(`days.splice(-2,2) --------`);
console.log(days)

console.log('-------------------------------------------------------------');
// splice(start, deleteCount, item1) -------------------------------------------
// item1 เป็นการระบุถึง element ที่จะ insert เข้าไป
// การใช้ syntax นี้หมายถึงการ insert(ต้องระบุ deleteCount เป็น 0) หรือ replace(ระบุ deleteCount เป็น 1)
let fruits = ['orange', 'pineapple', 'avocado']
console.log(`fruits = ['orange', 'pineapple', 'avocado']`);

// insert 'banana' ลงใน array index ที่ 1
fruits.splice(1,0,'banana');

console.log(`fruits.splice(1,0,'banana') --------`);
console.log(fruits);

// insert 'cherry' ลงใน array index ที่ -2
fruits.splice(-2,0,'cherry');

console.log(`fruits.splice(-2,0,'cherry') --------`);
console.log(fruits);

// replace 'apple' ที่ index 3
// จะทำการ delete 1 element ที่ index 3 เเละเพิ่ม 'apple' ที่ index 3
fruits.splice(3,1,'apple');

console.log(`fruits.splice(3,1,'apple') --------`);
console.log(fruits);

//หากinsert elementไป index ที่ไกลกว่าขนาดของindexในarray ณ ขณะนั้น ระบบจะไม่ทำการเว้นช่องindexให้จนถึงindex ที่จะinsertข้อมูล แต่จะไปinsertไว้ในindexสุดท้ายที่เป็นขนาดของarray ขณะนั้น
fruits.splice(20,0,'Peaches');

console.log(`fruits.splice(20,0,'Peaches') --------`);
console.log(fruits);

// warning!
// ถ้าใส่ deleteCount มากกว่า 1 และใส่replace แค่1ตัว มันจะไปลบ element ตามจำนวนที่ใส่ไปและทำการreplace elementไปแค่ตัวเดียว ณ indexที่start
fruits.splice(0,2,'blueberry');

console.log(`fruits.splice(0,2,'blueberry') --------`);
console.log(fruits);

console.log('-------------------------------------------------------------');
// splice(start, deleteCount, item1, item2, itemN) ---------------------------
// เป็นการ insert หรือ replace หลายๆ element
const months = ['January', 'March', 'April'];
console.log(`months = ['January', 'March', 'April']`);

// insert 'October', 'December' โดยเริ่มใส่ลงใน array index ที่ 2
months.splice(2,0,'October', 'December');

console.log(`months.splice(2,0,'October', 'December') --------`);
console.log(months);

// replace 'June', 'July' ลงใน index ที่ 2 เเละ 3 ตามลำดับ
// ** ในกรณีที่เราระบุจำนวน deleteCount เท่ากับจำนวน item ที่ใส่เข้ามา ซึ่งในที่นี้คือ 2 
months.splice(2,2,'June', 'July');

console.log(`months.splice(2,2,'June', 'July') --------`);
console.log(months);
 
// replace 'May' ที่ index 3 และ insert 'November' ใน index ที่ 4
// ** ในกรณีที่เราใส่ deleteCount น้อบกว่าจำนวน item ที่ใส่เข้ามา
months.splice(3,1,'May', 'November');

console.log(`months.splice(3,1,'May', 'November') --------`);
console.log(months);

// delete 3 element และ insert 'August', 'September' โดยเริ่มที่ index ที่ 0
months.splice(0,3,'August', 'September');

console.log(`months.splice(0,3,'August', 'September') --------`);
console.log(months);
