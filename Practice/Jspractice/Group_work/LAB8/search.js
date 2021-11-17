import {showMenus} from "./menu_list.js";
import {kfcMenu} from "./menus.js";

// กำหนดตัวเเปร toggle เพื่อเอาไว้เช็คว่าตอนช่องและปุ่ม search กำลังเเสดงอยู่รึป่าว
let toggle = false;
export function checkToggle() {
    //switch toggle 
    toggle = !toggle ;
    if(toggle) {
  
        //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
        searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
                               <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;
  
        //อันนี้จะ add event ให้กับปุ่ม search 
        const searchBtn = document.querySelector('#searchBtn');
        console.log(searchBtn);
        
        // ทำการ add event ให้กับปุ่ม search เมื่อ click เเล้วจะนำ value ที่พิมไว้ในช่อง search เข้ามาไปหาว่าตรงกับตัวไหนใน kfcMenu บ้าง เเล้วก็เมนูเหล่านั้นเเสดงออกมา
        searchBtn.addEventListener('click', () => {
  
            // ทำการ querySelector ช่อง search เเละ get value ออกมา จากนั้นนำไปเก็บไว้ในตัวแปร value
            let value = document.querySelector('#inputValue').value;
            //console.log(document.querySelector('#inputValue'))
            console.log(value);
  
            //นำ value มาสร้างเป็น pattern ด้วย regular expression object ที่กำหนด attribute เป็น i (ignore case) เพื่อใช้ในการค้นหาชื่อสินค้าที่มีประกอบด้วย pattern นั้นๆอยู่
            let pattern = new RegExp(value, 'i')
            console.log(pattern);
  
            //ใช้ filter ในการวนลูปเข้าไปเช็น condition ใน kfcMenu โดยจะ filter เฉพาะเมนูที่มีชื่อประกอบด้วย pattern ที่กำหนดไว้ เเละเข้าไป assign ให้กับ searchMenu
            const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
            console.log(searchMenu);
            //เเสดง menu ที่อยู่ใน searchMenu ออกมา
            showMenus(searchMenu);
            //addEvenBtn();
            
  
        })
  
        // add event ใหกับช่อง search ทุกๆครั้งที่ทำการกดหรือปล่อยปุ่มใดๆบน keyborad เเล้ว value ในช่อง search มีค่าเป็น '' ให้ทำการเเสดงเมนูทั้งหมดใน kfcMenu ออกมา
        let inputValue = document.querySelector('#inputValue');
        inputValue.addEventListener('keyup' , () =>{
            // console.log(inputValue.value)
            if(inputValue.value == ''){
              showMenus(kfcMenu);
              //addEvenBtn();
            }
        })
  
    } else {
        // ในกรณีที่ toggle เป็น true (ช่องเเละปุ่ม search เเสดงอยู่เเล้ว) ให้ทำการซ้อนช่องเเละปุ่ม search ไว้โดยการลบ tag หรือข้อความทั้งหมดใน searchBar
        searchBar.innerHTML = '';
    }
  }