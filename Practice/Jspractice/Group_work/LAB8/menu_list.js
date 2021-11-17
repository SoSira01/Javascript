
import {carts} from "./carts.js";

export function showMenus(arr) {
    //allMenu เป็น div ก้อนใหญ่สุดที่มี selector เป็นชนิด id มีอยู่แล้วใน html สามารถใช้ querySelector ในการเข้าถึงได้เลย
    let allMenu = document.querySelector('#allMenu');
    // จะ clear div ในให้เป็น div ว่างๆก่อนทุกครั้ง
    allMenu.textContent = '';
    
    //ใช้ for..of เพื่อเข้าถึงข้อมูลในแต่ละ index ของ array ที่จะรับเข้ามา
    for(let menu of arr) {

    //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
    const cardBody = document.createElement('div');
    //สร้าง element div และ assign ให้กับ cardBody
  
    cardBody.setAttribute('id', menu.menuId);
    cardBody.setAttribute('class', 'card-body');
    cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px; background-color: SeaShell');
    //กำหนด attribute class และ attribute style ให้กับ cardBody เพื่อจัดรูปแบบให้กับ element div
    //console.log(cardBody);
  
    //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
    const menuImgEle = document.createElement('img');
    //สร้าง element img และ assign ให้กับ menuImgEle
  
    menuImgEle.setAttribute('class', 'card-img-top');
    menuImgEle.setAttribute('src', menu.menuImg);
    menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
    //กำหนด attribute src โดย value เอามาจาก key ที่ชื่อว่า menuImg ซึ่งมาจาก object ที่อยู่ใน array kfcMenu
    //console.log(menuImgEle);
  
    //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
    const h4MenuNameEle = document.createElement('h4');
    //สร้าง element h4 และ assign ให้กับ h4MenuNameEle
  
    h4MenuNameEle.setAttribute('class', 'card-title');
    h4MenuNameEle.setAttribute('style', 'color:red;');
    //กำหนด attribute class และ attribute style ให้กับ h4MenuNameEle เพื่อจัดรูปแบบให้กับ element h4
  
    h4MenuNameEle.textContent = menu.menuName;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuName ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element h4
    //console.log(h4MenuNameEle);
  
    //<p class="card-text">Description</p>
    const pMenuDescEle = document.createElement('p');
    //สร้าง element p และ assign ให้กับ pMenuDescEle
  
    pMenuDescEle.setAttribute('class', 'card-text');
    //กำหนด attribute class ให้กับ pMenuDescEle เพื่อจัดรูปแบบให้กับ element p
  
    pMenuDescEle.textContent = menu.menuDesc;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuDesc ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
    //console.log(pMenuDescEle);
  
    //<p class="card-text">Status</p>
    const pMenuStatusEle = document.createElement('p');
    //สร้าง element p และ assign ให้กับ pMenuStatusEle
  
    pMenuStatusEle.setAttribute('class', 'card-text');
    //กำหนด attribute class ให้กับ pMenuStatusEle เพื่อจัดรูปแบบให้กับ element p
  
    pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuStatus ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
    //console.log(pMenuStatusEle);
  
    //<div class="d-inline-flex px-4... ">ราคา</div>
    const divMenuPriceEle = document.createElement('div');
    //สร้าง element div และ assign ให้กับ divMenuPriceEle
  
    divMenuPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
    divMenuPriceEle.textContent = '฿' + menu.price;
    //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า price ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element div
    //console.log(divMenuPriceEle);
  
    //<button type = "button" class = "container btn btn-danger">Add To Cart</button>
    const buttonAddEle = document.createElement('button');
    buttonAddEle.setAttribute('type', 'button');
    buttonAddEle.setAttribute('class', 'buttonAdd container btn btn-danger');
    buttonAddEle.textContent = 'Add To Cart';
    // ใช้ textContent เพื่อเเสดงคำว่า 'Add To Cart' ใน button ของ
    
    // add event to bottonAddEle ถ้าทำการ click ที่ปุ่มนี้จะทำการเพิ่ลเมนูนี้เข้าไปในตะกร้า
    buttonAddEle.addEventListener('click', () => {
      
      //แสดง alert บอก id สินค้าที่เพิ่มเข้าตะกร้า
      alert(`Add Menu ID '${menu.menuId}' to Your Cart`)
  
      // สร้าง object ที่จะเพิ่มเข้าไป
      let newItem = {id: menu.menuId, name: menu.menuName, price: menu.price, qty: 1};

      carts.addItem(newItem);
      carts.save();
  
    })
  
  
    //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
    cardBody.appendChild(menuImgEle);
    cardBody.appendChild(h4MenuNameEle);
    cardBody.appendChild(pMenuDescEle);
    cardBody.appendChild(pMenuStatusEle);
    cardBody.appendChild(divMenuPriceEle);
    cardBody.appendChild(buttonAddEle);
    
    //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
    allMenu.appendChild(cardBody);
  
    }
  }

  