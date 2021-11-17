
//เมื่อทำการ refresh สีของ bg ก็จะเป็นไปตามค่าที่อยู่ใน localStorage ณ เวลานั้นๆ 
loadBgColor();

// bg color
const thistle = document.querySelector('#Thistle');
const peachPuff = document.querySelector('#PeachPuff');
const paleGoldenrod = document.querySelector('#PaleGoldenrod');
const tan = document.querySelector('#Tan');
const reset = document.querySelector('#reset')

// ใส่ event ให้เเต่ละปุ่มสี
thistle.addEventListener('click', changeBgColor);
peachPuff.addEventListener('click', changeBgColor);
paleGoldenrod.addEventListener('click', changeBgColor);
tan.addEventListener('click', changeBgColor);

// reset background color button
//เมื่อกดปุ่ม reset จะเปลี่ยน backgroundColor เป็น white และลบข้อมูลใน localStorage ตัวที่มี key ชื่อว่า bgcolor
reset.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    localStorage.removeItem('bgcolor')
})

function changeBgColor(event) {
    let color = event.target.id;
    console.log(color);
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgcolor', `${color}`);
    //กำหนดให้สีของ bg เปลี่ยนไปตามค่าที่อยู่ใน id ของ html element แต่ละตัวที่ใช้ในการเลือกสี bg แล้วเก็บไว้ในตัวแปร color
    //นำค่าที่อยู่ในตัวแปร color ไปเก็บไว้ใน value ของ localStorage ตัวที่มี key ชื่อว่า bgcolor  
}

function loadBgColor() {
    let localColor = decodeURIComponent(localStorage.getItem('bgcolor'));
    document.body.style.backgroundColor = localColor;
    //กำหนดให้สีของ bg เปลี่ยนไปตามค่าที่อยู่ใน localStorage ตัวที่มี key ชื่อว่า bgcolor 
}

