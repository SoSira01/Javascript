import {kfcMenu} from "./menus.js";
import {showMenus} from "./menu_list.js";
import {incarts} from "./carts.js";
import {checkSearchPanel,searchKfcMenu} from "./search.js";
import {Cookie} from "./cookie.js";

const searchIcon = document.querySelector('#searchIcon');
const cartIcon = document.querySelector('#cartIcon');
const clearBtn = document.querySelector('#clearBtn');
const searchBtn = document.querySelector('#searchBtn');

console.log(decodeURIComponent(document.cookie));

//สั่งให้ load ข้อมูลในตะกร้าเก่า โดยการเช็คการว่ายังมี cookie ของข้อมูล carts อยู่รึป่าว
if(Cookie.getCookie('incart') != null){
    incarts.loadCarts();
}

// show all menu
showMenus(kfcMenu);

searchIcon.addEventListener('click', checkSearchPanel);
searchBtn.addEventListener('click', searchKfcMenu);
cartIcon.addEventListener('click', incarts.showCarts);
clearBtn.addEventListener('click', incarts.clearAll);




