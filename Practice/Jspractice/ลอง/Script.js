import {CookieUtil} from "./cookie.js";

const text = document.getElementById("myText");
const demo = document.getElementById('#demo');

//เก็บค่า ที่พิ่มเข้าไป
export let input = [];
//เอาค่าที่พิ่มเข้าไปเก็บในarray
// export function addText() {
    var x = text.value;
    input.push(x);
    console.log(x);
    console.log(input);

  // }
//save cookie
// export function save() {
//      CookieUtil.set('keeptext', JSON.stringify(input));
//   }
// //load cookie
// export function load() {
//     incarts = JSON.parse(Cookie.getCookie('keeptext'));
//   }

// //show text
// export function showAll(){

const displaytext = document.createElement('p');
displaytext.setAttribute('id', 'show');
displaytext.textContent = 'Text : ' + input;

displaytext.appendChild(demo);

// }

