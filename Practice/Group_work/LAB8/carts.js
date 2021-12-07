import {Cookie} from "./cookie.js";

export let incarts = {
    items: [] , 
    itemId: [] , 
    totalQty: 0 ,
    totalPrice: 0 
};

// เป็นการอัพเดตข้อมูลใน carts ลงใน cookie
export function save() {
  Cookie.set('cart', JSON.stringify(incarts));
  // JSON.stringify ใช้ในการแปลง object เป็น string
}

export function clearAll() {
  alert('Clear your carts !!');
  Cookie.unset('cart');

  const cartAmount = document.querySelector('#amount');
  cartAmount.textContent = incarts.totalQty

}


export function addItem(newItem) {

    if(incarts.items.length == 0 || incarts.itemId.includes(newItem.id) == false){
        incarts.items.push(newItem)
        incarts.itemId.push(newItem.id)
  
      } else {
          for(let checkItem of incarts.items) {
            if(checkItem.id == newItem.id) {
              checkItem.qty++ ;
            }
          }
      }
  
      incarts.totalQty = incarts.items.reduce((sum,item) => {return sum += item.qty}, 0);
      incarts.totalPrice = incarts.items.reduce((sum,item) => {return sum += (item.price * item.qty)}, 0);
      console.log(incarts)
  
      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = incarts.totalQty;

}


export function loadCarts() {
  incarts = JSON.parse(Cookie.getCookie('cart'));
  console.log(incarts);

  const cartAmount = document.querySelector('#amount');
  cartAmount.textContent = incarts.totalQty
}

export function showCarts() {

  const modal = document.querySelector('#myModal');
  modal.style.display = "block";

  const modalBody = document.querySelector('.modal-body');
  modalBody.textContent = '';

  if(incarts.items.length == 0) {
      modalBody.textContent = 'There are no order in your cart.'

  } else {
    for(let menu of incarts.items) {

      const divItem = document.createElement('div');
      divItem.className = 'd-flex border p-2';

      const divMenuName = document.createElement('div');
      divMenuName.className = 'p-2';
      divMenuName.style = 'width: 260px';
      divMenuName.textContent = menu.name;

      const divMenuPrice = document.createElement('div');
      divMenuPrice.className = 'p-2 flex-fill text-center';
      divMenuPrice.textContent = `${menu.price}฿`;
    
      const divMenuQty = document.createElement('div');
      divMenuQty.className = 'p-2 fw-bolder text-end';
      divMenuQty.style = 'width: 80px';
      divMenuQty.textContent = `× ${menu.qty}`;

      divItem.appendChild(divMenuName);
      divItem.appendChild(divMenuPrice);
      divItem.appendChild(divMenuQty);

      modalBody.appendChild(divItem)

    }
    
  }

  // เเสดงราคารวมออกมา
  document.querySelector('#totalPrice').textContent = `total price : ${incarts.totalPrice}`;

  // ใส่ event ให้กับปุ่มปิดที่อยู่ใน modal เมื่อคลิกที่ปุ่มจะปิดเเท็บของ modal
  const closeBtn = document.getElementById("close")
  closeBtn.addEventListener('click', () => {modal.style.display = "none";})

  
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })
  
}

