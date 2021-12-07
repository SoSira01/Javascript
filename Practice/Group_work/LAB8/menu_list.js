import {addItem, save} from "./carts.js";

export function showMenus(arr) {
    
    let allMenu = document.querySelector('#allMenu');
    
    allMenu.textContent = '';
    
    
    for(let menu of arr) {

    
    const cardBody = document.createElement('div');
    cardBody.setAttribute('id', menu.menuId);
    cardBody.setAttribute('class', 'card-body');
    cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px; background-color: SeaShell; display: inline');
  

    const menuImgEle = document.createElement('img');
    menuImgEle.setAttribute('class', 'card-img-top');
    menuImgEle.setAttribute('src', menu.menuImg);
    menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
    
    const h4MenuNameEle = document.createElement('h4');
    h4MenuNameEle.setAttribute('class', 'card-title');
    h4MenuNameEle.setAttribute('style', 'color:red;');
    h4MenuNameEle.textContent = menu.menuName;
   
    const pMenuDescEle = document.createElement('p');
    pMenuDescEle.setAttribute('class', 'card-text');
    pMenuDescEle.textContent = menu.menuDesc;
  
    const divMenuPriceEle = document.createElement('div');
    divMenuPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
    divMenuPriceEle.textContent = '฿' + menu.price;
  
    const buttonAddEle = document.createElement('button');
    buttonAddEle.setAttribute('type', 'button');
    
    if(menu.menuStatus == 'available'){
      buttonAddEle.setAttribute('class', 'container btn btn-danger');
      buttonAddEle.textContent = 'Add To Cart';
      buttonAddEle.addEventListener('click', () => {
        alert(`Add Menu ID '${menu.menuId}' to Your Cart`)
        let newItem = {id: menu.menuId, name: menu.menuName, price: menu.price, qty: 1};
        carts.addItem(newItem);
        carts.save();
      })

    } else {
      buttonAddEle.setAttribute('class', 'container btn btn-secondary');
      buttonAddEle.textContent = 'Sold Out';
    
    }
    
    cardBody.appendChild(menuImgEle);
    cardBody.appendChild(h4MenuNameEle);
    cardBody.appendChild(pMenuDescEle);
    cardBody.appendChild(divMenuPriceEle);
    cardBody.appendChild(buttonAddEle);
    allMenu.appendChild(cardBody);
  
    }
  }

  

  