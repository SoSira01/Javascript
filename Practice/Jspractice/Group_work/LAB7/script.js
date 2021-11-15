import {kfcMenu} from "./menus.js";
import{CookieUtil} from "./cookie.js";
import{checkToggle} from "./checkToggle.js";

// สร้าง object carts โดย items จะเก็บเป็น array ของ menu ที่จะเพิ่มเข้ามาใน carts
//                       itemId จะเก็บ id ของ menu ที่เคยเพิ่มเข้ามาแล้ว
//                       totalQty จะเก็บจำนวนmenuทั้งหมดที่เพิ่มเข้ามา
let carts = {items: [], itemId: [] , totalQty: 0};

// เรียกใช้function showMenus เพื่อทำการแสดงรายการMenuทั้งหมด โดยใส่parameter เป็นkfcMenu ซึ่งimportมาจาก menus.js
showMenus(kfcMenu)

//ใช้ querySelector เพื่อเลือก Selector ตัวที่ต้องการ
const search = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar')
const cartAmount = document.querySelector('#amount');

//add event เข้าไปใน search เมื่อทำการ click ให้เข้าไปทำ function checkToggle
search.addEventListener('click', checkToggle);
//add event เข้าไปใน clearBtn เมื่อทำการ click ให้เข้าไปทำ function clearCarts
clearBtn.addEventListener('click', clearCarts);

//function clearCarts จะทำการreset ค่าทั้งหมดในobject carts เมื่อถูกเรียกใช้
function clearCarts() {
  carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};
  cartAmount.textContent = 0;
  //reset cookie
  CookieUtil.unset("cart");
}

//function showMenus ทำหน้าที่รับค่าเข้ามาทาง parameter เพื่อแสดงค่าที่อยู่ข้างใน (function นี้คือ lab6 ที่ทำการเปลี่ยนเป็น function และเพิ่มโค้ดบางส่วน)
function showMenus(arr) {
  //allMenu เป็น div ก้อนใหญ่สุดที่มี selector เป็นชนิด id มีอยู่แล้วใน html สามารถใช้ querySelector ในการเข้าถึงได้เลย
  let allMenu = document.querySelector('#allMenu');
  //จะ clear div ในให้เป็น div ว่างๆก่อนทุกครั้ง
  allMenu.textContent = '';
  
  //ใช้ for..of เพื่อเข้าถึงข้อมูลในแต่ละ index ของ array ที่จะรับเข้ามา
  for(let menu of arr) {

  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  //สร้าง element div และ assign ให้กับ cardBody
  cardBody.setAttribute('id', menu.menuId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
  //กำหนด attribute class และ attribute style ให้กับ cardBody เพื่อจัดรูปแบบให้กับ element div
  console.log(cardBody);

  //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
  const menuImgEle = document.createElement('img');
  //สร้าง element img และ assign ให้กับ menuImgEle
  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', menu.menuImg);
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

  //<div class="d-inline-flex px-4... ">ราคา</div>
  const divMenuPriceEle = document.createElement('div');
  //สร้าง element div และ assign ให้กับ divMenuPriceEle
  divMenuPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divMenuPriceEle.textContent = '฿' + menu.price;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า price ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element div
  console.log(divMenuPriceEle);

  //<button type = "button" class = "container btn btn-danger">Add To Cart</button>
  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';
  //ใช้ textContent เพื่อเเสดงคำว่า 'Add To Cart' ใน button 
  
  // ส่วนที่เพิ่มเติมขึ้นมาจาก lab6
  // add event to bottonAddEle ถ้าทำการ click ที่ปุ่มนี้จะทำการเพิ่มเมนูนี้เข้าไปใน carts
  buttonAddEle.addEventListener('click', () => {
  
    //แสดง alert บอก id สินค้าที่เพิ่มเข้า carts
    alert(`Add Menu ID '${menu.menuId}' to Your Cart`);

    // สร้าง object newItem ที่จะเพิ่มเข้าไปใน carts
    let newItem = {id: menu.menuId, name: menu.menuName, price: menu.price, qty: 1};

    //ถ้า array items ที่อยู่ใน carts ไม่มีเมนูใดๆเลย หรือเมนูที่จะเพิ่มเข้าไปนั้นไม่เคยมีการเพิ่มลง carts มาก่อน
    //ให้ทำการเพิ่ม object newItem เข้าไปใน array items เเละเพิ่ม id ของ newItem เข้าไปใน array itemId เพื่อเก็บประวัติไว้ว่าเคยมีเมนูอันนี้เพิ่มเข้ามาเเล้ว
    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem);
      carts.itemId.push(newItem.id);

    //ถ้าเคยเมนูอันนี้ในตะกร้าเเล้วให้ทำการวนลูปหาว่าเมนูนี้อยู่ index ไหนของ array items เเล้วเพิ่ม qty เข้าไป 1
    } else {
        for(let checkItem of carts.items) {
          if(checkItem.id == newItem.id) {
            checkItem.qty++ ;
          }
        }
    }

    //ใช้ reduce ในการคำนวนหาจำนวนเมนูทั้งหมดที่อยู่ใน array items ที่อยู่ใน object carts
    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    console.log(carts.itemId);
    console.log(carts.items);
    console.log(carts);

  //set cookie
      CookieUtil.set('cart', carts.totalQty , 1);
      
    //ใช้ textContent ในการเเสดง totalQty ใน object carts ลงใน cartAmount (tag span ที่มี id เป็น amount)
    cartAmount.textContent = carts.totalQty;
    
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
//get cookie
if(CookieUtil.get('cart') >= 1){
  cartAmount.textContent = CookieUtil.get('cart') ;
}else {cartAmount.textContent = 0 ;}



