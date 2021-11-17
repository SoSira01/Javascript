import {Cookie} from "./cookie.js";
// สร้าง object carts โดย items จะเก็บเป็น array ของ menu ที่จะเพิ่มเข้ามาใน carts
//                       itemId จะเก็บ id ของ menu ที่เคยเพิ่มเข้ามาแล้ว
//                       totalQty จะเก็บจำนวน menu ทั้งหมดที่เพิ่มเข้ามา
//                       totalPrice จะเก็บราคารวมของ menu ทั้งหมดที่เพิ่มเข้ามา

// การเก็บ itemId เเยกออกมาจาก items จะทำให้เวลา addItem สามารถเช็คเงื่อนไขที่ว่าเคยมี menu นี้อยู่ใน items รึป่าวได้ง่ายมากขึ้น 
// ใช้ method includes ได้เลยไม่จำเป็นจะต้องไปวนลูปเช็คอีกรอบ
export let carts = {
    items: [] , 
    itemId: [] , 
    totalQty: 0 ,
    totalPrice: 0 ,

    // เป็นการอัพเดตข้อมูลใน carts ลงใน cookie
    save: () => {
      Cookie.set('cartItems', JSON.stringify(carts.items));
      Cookie.set('cartHistory', JSON.stringify(carts.itemId));
      Cookie.set('totalQty', JSON.stringify(carts.totalQty));
      Cookie.set('totalPrice', JSON.stringify(carts.totalPrice))
    },

    clearAll: () => {
      alert('Clear your carts !!');
      // clear ของทุกอย่างออก
      carts.items = []; 
      carts.itemId = []; 
      carts.totalQty = 0;
      carts.totalPrice = 0;

      // อัพเดตตรงที่เเสดง total quantity
      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = carts.totalQty

      // อัพเดตข้อมูลของ carts ต่างๆใน cookie
      carts.save()
    },

    
    addItem: (newItem) => {

        // ถ้า array items ที่อยู่ใน carts ไม่มีของอยู่ในตะกร้า หรือสินค้าที่จะเพิ่มเข้าไปนั้นไม่เคยมีการเพิ่มลงตะกร้ามาก่อน
        //ให้ทำการเพิ่ม object newItem เข้าไปใน array items เเละเพิ่ม id ของ newItem เข้าไปใน array itemId เพื่อเก้บประวัติไว้ว่าเคยมีเมนูอันนี้เพิ่มเข้ามาเเล้ว
        if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
            carts.items.push(newItem)
            carts.itemId.push(newItem.id)
      
          // เเต่ถ้าเคยเมนูอันนี้ในตะกร้าเเล้วให้ทำการวนลูปหาว่าว่าเมนูนี้อยู่ index ไหนของ array items เเล้วเพิ่ม qty เข้าไป 1
          } else {
              for(let checkItem of carts.items) {
                if(checkItem.id == newItem.id) {
                  checkItem.qty++ ;
                }
              }
          }
      
          //ใช้ reduce ให้การคำนวนหาจำนวนเมนูทั้งหมดที่อยู่ใน array items ที่อยู่ใน object carts
          carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
          carts.totalPrice = carts.items.reduce((sum,item) => {return sum += (item.price * item.qty)}, 0);
          console.log(carts)
      
          //ใช้ textContent ในการเเสดง totalQty ใน object carts ลงใน cartAmount (tag span ที่มี id เป็น amount)
          const cartAmount = document.querySelector('#amount');
          cartAmount.textContent = carts.totalQty;

    },

    // function ที่จะโหลดเมนูในตะกร้าเก่าขึ้นมาใหม่
    loadCarts: () => {
      carts.items = JSON.parse(Cookie.getCookie('cartItems'));
      carts.itemId = JSON.parse(Cookie.getCookie('cartHistory'));
      carts.totalQty = Number(Cookie.getCookie('totalQty'));
      carts.totalPrice = Number(Cookie.getCookie('totalPrice'));
      console.log(carts);

      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = carts.totalQty
    },

    showCarts: () => {

      // เปลี่ยนให้ display ของ modal เป็น block เพื่อให้ modal เเสดงออกมา
      const modal = document.querySelector('#myModal');
      modal.style.display = "block";

      // set ให้ modal body เป็น div ว่างๆ เป็นการ clear ของอันเก่าที่เราเคยเรียกเเสดงไปเเล้ว
      const modalBody = document.querySelector('.modal-body');
      modalBody.textContent = '';

      if(carts.items.length == 0) {
          modalBody.textContent = 'There are no order in your cart.'

      } else {
        // วนลูปเเสดงรายการเมนูเเต่ละอันที่อยู่ใน array items ของ object carts
        for(let menu of carts.items) {

          // div ใหญ่ที่ครอบเเต่ละ menu
          const divItem = document.createElement('div');
          divItem.className = 'd-flex border p-2';

          // div ย่อยที่เเสดงชื่อเมนู
          const divMenuName = document.createElement('div');
          divMenuName.className = 'p-2';
          divMenuName.style = 'width: 260px';
          divMenuName.textContent = menu.name;

          // div ย่อยที่เเสดงราคา
          const divMenuPrice = document.createElement('div');
          divMenuPrice.className = 'p-2 flex-fill text-center';
          //divMenuPrice.style = 'width: 40px';
          divMenuPrice.textContent = `${menu.price}฿`;
        
          // div ย่อยที่เเสดงจำนวนเมนูที่กดเพิ่มเข้ามา
          const divMenuQty = document.createElement('div');
          divMenuQty.className = 'p-2 fw-bolder text-end';
          divMenuQty.style = 'width: 80px';
          divMenuQty.textContent = `× ${menu.qty}`;

          // นำ div ย่อยเเต่ละอันมา appendChild ให้กับ div ใหญ่ของเเต่ละเมนู
          divItem.appendChild(divMenuName);
          divItem.appendChild(divMenuPrice);
          divItem.appendChild(divMenuQty);

          // นำ div ใหญ่ของเเต่ะลเมนูมา appendChild ให้กับ modalBody
          modalBody.appendChild(divItem)

        }
        
      }

      // เเสดงราคารวมออกมา
      const totalPriceEle = document.querySelector('#totalPrice');
      totalPriceEle.textContent = `total price : ${carts.totalPrice}`;

      // ใส่ event ให้กับปุ่มปิดที่อยู่ใน model เมื่อคลิกที่ปุ่มจะปิดเเท็บของ modal
      const closeBtn = document.getElementById("close")
      closeBtn.addEventListener('click', () => {modal.style.display = "none";})

      // เมื่อคลิกที่ส่วนใดๆของจอ ที่อยู่ของนอกกรอบ modal ให้ทำการปิดเเท็บ modal ลง
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      })
      
    }

};

