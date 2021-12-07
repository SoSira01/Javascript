// higher order function and closures -----------------------------------------------------------------------------------------
// function orderDetail เป็น higher order function เพราะมีการ return ตัวที่เป็น inner function ซึ่งก็คือ function action
// function orderDetail มี parameter ที่รับ products ของ order เข้ามา
let orderDetail = function (products) {

    // function action เป็น closures เพราะว่า inner function มีการอ้างถึงตัวแปรที่มาจาก outer function และเก็บรักษาตัวแปรนั้นไว้
    // function action มี parameter ที่รับ name ของ action ที่จะทำ (print, add, remove) และรับ item ที่จะทำการ add หรือ remove เข้ามา
    function action(name,item) {
        // switch จะทำการเเยกว่าจะทำ action ไหน
        switch(name) {
            // case "print" จะทำการเเสดง element ของ products ทั้งหมดออกมา โดยใช้ forEach ในการวน loop
            case "print" : return products.forEach(item => console.log(item));
            break;
            // case "add" จะทำการเพิ่ม item ลงไปใน array products
            case "add" : return products.push(item);
            break;
            // case "remove" จะทำการลบ item ออกจาก array products
            // ซึ่งใช้ method splice(start, deleteCount) ในการลบ โดยจะใช้ indexOf() ในการหา index ของ item นั้นๆ เเละระบุเป็น start ใน parameter
            case "remove" : return products.splice(products.indexOf(item), 1);
            default:
            break;
        }
    }
    return action;
}

// default parameter, Rest parameter ---------------------------------------------
// function courseList มีการกำหนดให้ใส่ parameter ทั้ง 3 ตัว คือ course เเละ lecture ที่เป็น default parameter กำหนดค่าเริ่มต้นเป็น 'unknow'
// เเละ ...students เป็น rest parameter ที่จะรับรายชื่อของนักเรียนเข้ามา
function courseList(course = 'unknow', lecture = 'unknow', ...students) {

    // ภายใน function จะทำการเเสดงข้อมูลต่างๆออกมา
    console.log(`${course}`);
    console.log(`Lecture : ${lecture}`);
    console.log(`Students : ${students}`);
}


// เป็นการ export list ออกไป ซึ่งจะมี orderDetail เเละ courseList
export {orderDetail, courseList}