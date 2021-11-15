let kfcMenu = [
    {
      menuImg: 'sooktermjor.png',
      menuId: 'm001',
      menuName: 'Sook Tem Jor', 
      menuDesc: '4 pcs. Fried Chicken , 7 pcs. Chicken Pop , 6 pcs. Nugget , 1 Regular French fries',
      price: 199.00 , 
      menuStatus:'available'   
    }
  , 
    {
      menuImg: 'chicknbun.png',
      menuId: 'm002',
      menuName: 'Chick and Bun', 
      menuDesc: 'Boneless Chicken with Soft Bun, Topped with Delicious Special Mayo Sauce, Yummy!!!', 
      price: 29.00 ,
      menuStatus:'sold out'   
    }
  ,
    {
      menuImg: 'buckethaichok_dlv_new.png',
      menuId: 'm003',
      menuName: 'Bucket Hai Chok',
      menuDesc: '4 pcs. Fried Chicken , 2 pcs. WingZ Zabb , 4 pcs. Nugget , 2 Pepsi',
      price: 239.00 ,
      menuStatus:'available'  
    }
  ];
//เก็บข้อมูลสินค้าลงในตัวแปร kfcMenu ซึ่งใช้โครงสร้างแบบ object ใน array

  

for(const menu of kfcMenu){
    //ใช้ for..of เพื่อเข้าถึงข้อมูลในแต่ละ index ของ array ที่ชื่อว่า kfcMenu

    //allMenu เป็น div ก้อนใหญ่สุดที่มี selector เป็นชนิด id มีอยู่แล้วใน html สามารถใช้ querySelector ในการเข้าถึงได้เลย
    const allMenu = document.querySelector('#allMenu');
  
    //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
    const cardBody = document.createElement('div');
    //สร้าง element div และ assign ให้กับ cardBody

    cardBody.setAttribute('class', 'card-body');
    cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:10px');
    //กำหนด attribute class และ attribute style ให้กับ cardBody เพื่อจัดรูปแบบให้กับ element div
    console.log(cardBody);
  
    //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
    const menuImgEle = document.createElement('img');
    //สร้าง element img และ assign ให้กับ menuImgEle
    
    menuImgEle.setAttribute('class', 'card-img-top');
    menuImgEle.setAttribute('src', menu.menuImg);
    //กำหนด attribute class และ attribute style ให้กับ menuImgEle เพื่อจัดรูปแบบให้กับ element img

    menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
    //กำหนด attribute src โดย value เอามาจาก key ที่ชื่อว่า menuImg ซึ่งมาจาก object ที่อยู่ใน array kfcMenu
    console.log(menuImgEle);
  
    //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
    const h4MenuNameEle = document.createElement('h4');
    //สร้าง element h4 และ assign ให้กับ h4MenuNameEle
    
    h4MenuNameEle.setAttribute('class', 'card-title');
    h4MenuNameEle.setAttribute('style', 'color:red;');
    //กำหนด attribute class และ attribute style ให้กับ h4MenuNameEle เพื่อจัดรูปแบบให้กับ element h4

    h4MenuNameEle.textContent = menu.menuName;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuName ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element h4
    console.log(h4MenuNameEle);

    //<p class="card-text">Description</p>
    const pMenuDescEle = document.createElement('p');
    //สร้าง element p และ assign ให้กับ pMenuDescEle

    pMenuDescEle.setAttribute('class', 'card-text');
    //กำหนด attribute class ให้กับ pMenuDescEle เพื่อจัดรูปแบบให้กับ element p

    pMenuDescEle.textContent = menu.menuDesc;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuDesc ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
    console.log(pMenuDescEle);

    //<p class="card-text">Status</p>
    const pMenuStatusEle = document.createElement('p');
    //สร้าง element p และ assign ให้กับ pMenuStatusEle

    pMenuStatusEle.setAttribute('class', 'card-text');
    //กำหนด attribute class ให้กับ pMenuStatusEle เพื่อจัดรูปแบบให้กับ element p

    pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuStatus ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
    console.log(pMenuStatusEle);

    //<button type="button" class="btn btn-danger">ราคา</button>
    const buttonPriceEle = document.createElement('button');
    //สร้าง element button และ assign ให้กับ buttonPriceEle

    buttonPriceEle.setAttribute('type', 'button');
    buttonPriceEle.setAttribute('class', 'btn btn-danger');
    //กำหนด attribute class และ attribute style ให้กับ buttonPriceEle เพื่อจัดรูปแบบให้กับ element button

    buttonPriceEle.textContent = '฿' + menu.price;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า price ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element button
    console.log(buttonPriceEle);

    //add ข้อมูลที่อยู่ใน element ต่างๆซึ่งเป็นรายละเอียดของสินค้าลงใน cardBody
    cardBody.appendChild(menuImgEle);
    cardBody.appendChild(h4MenuNameEle);
    cardBody.appendChild(pMenuDescEle);
    cardBody.appendChild(pMenuStatusEle);
    cardBody.appendChild(buttonPriceEle);

    //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu เพื่อเอาทั้งหมดไปแสดงผลใน html
    allMenu.appendChild(cardBody);
}