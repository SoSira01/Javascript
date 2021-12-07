import {CookieUtil} from "./cookie.js";

const input = document.getElementById("myInput");
let array = [];
export function getInputValue(){ 
    if(input.value == []) console.log('None');
    var inputVal = input.value; 
    array.push(inputVal);
    // console.log(inputVal);
    // console.log(array);
    // alert(inputVal);  
    CookieUtil.set('text',JSON.stringify(array));
} 

export function clearAll(){
    array = [];
    CookieUtil.unset('text');
    //alert('clear all text!!')
}

document.onclick = showw;
export function showw(){
const show =JSON.parse(CookieUtil.get('text'));
const re = document.getElementById('result')
re.innerHTML = show;
}

