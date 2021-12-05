import {CookieUtil} from "./cookie.js";

const all = document.getElementById('all');
const input = document.getElementById("myInput");

let array = [];

const enterValue = document.createElement('button');
enterValue.setAttribute('type','button');
enterValue.addEventListener('click',getInputValue);
enterValue.textContent = 'Enter';

const delButton = document.createElement('button');
delButton.setAttribute('type','button');
delButton.addEventListener('click',clearAll);
delButton.textContent = 'Delete';

all.appendChild(enterValue);
all.appendChild(delButton);

function getInputValue(){ 
    if(input.value == []) console.log('None');
    var inputVal = input.value; 
    array.push(inputVal);
    //console.log(inputVal);
    // alert(inputVal);  
    CookieUtil.set('text',JSON.stringify(array));
} 

function clearAll(){
    CookieUtil.unset('text');
    alert('clear all text!!')
    console.log(array);
}

function loadCarts() {
    array = JSON.parse(Cookie.getCookie('cart'));
    console.log(array);
  
  }

function showInput(){
    if( CookieUtil.get('text') != null){
        array.loadCarts();
    }
}

