import {kfcMenu} from "./menus.js";

let AllMenu = document.querySelector('#allMenu').children;
let searchBtn = document.querySelector('#searchBtn');
let inputValue = document.querySelector('#inputValue');

export function checkSearchPanel(){
      if(searchBtn.style.display === 'none' && inputValue.style.display === 'none'){
        inputValue.style.display = 'flex';
        searchBtn.style.display = 'flex';
      }else{
        inputValue.style.display = 'none';
        searchBtn.style.display = 'none';
        showAllMenu();
      }
  }

export function searchKfcMenu(){
        let value = inputValue.value;
        let pattern = new RegExp(value, 'i')
        const searchMenu = [];
        kfcMenu.filter((menu) => {
        if(menu.menuName.match(pattern) != null) {
            searchMenu.push(menu.menuId);
          }
        });

        for(let i of AllMenu) {
            if(searchMenu.includes(i.id)){
              i.style.display = 'inline';
            } else {
              i.style.display = 'none';
            }
        }
        inputValue.addEventListener('keyup' , () => {
            if(inputValue.value == '')
            showAllMenu();
        });
  }

 function showAllMenu() {
    for(let i of AllMenu) {
      i.style.display = 'inline';
    }
}


