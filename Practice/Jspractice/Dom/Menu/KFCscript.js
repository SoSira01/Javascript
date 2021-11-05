let kfcMenu = [
    {
    menuImg:'photo/sooktermjor.png',
    menuId:'m001',
    menuName:'สุขเต็มจอ',
    menuDesc:'ไก่ทอด 4 ชิ้น , ไก่ป๊อป 7 ชิ้น , นักเก็ตส์ 6 ชิ้น , เฟรนซ์ฟรายส์ ปกติ 1 ที่',
    price:199.00 ,
    menustatus:'available'
    }
,
    {
    menuImg:'photo/chicknbun.png',
    menuId:'m002',
    menuName:'ชิค แอนด์ บัน',
    menuDesc:'ไก่ไม่มีกระดูกใส่ในขนมปังเนื้อนุ่ม ราดด้วยซอสมายองเนสรสชาติเข้มข้นสูตรพิเศษ',
    price:29.00 ,
    menustatus:'sold out'
    }
,
  {
    menuImg:'photo/buckethaichok_dlv_new.png',
    menuId:'m003',
    menuName:'บักเก็ตให้โชค',
    menuDesc:'ไก่ทอด 4 ชิ้น , ไก่วิงซ์แซ่บ 2 ชิ้น , นักเก็ตส์ 4 ชิ้น , เป๊ปซี่ 2 ที่*',
    price:239.00 ,
    menustatus:'available'      
  }
];

for(const menu of kfcMenu) { 
    
    const allMenu = document.querySelector('#allMenu');  
    
    const cardBody = document.createElement('div'); 
    cardBody.setAttribute('class', 'card-body'); 
    cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:10px');  
    console.log(cardBody); 

    const menuImgEle = document.createElement('img');  
    menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;'); 
    menuImgEle.setAttribute('src', menu.menuImg); 
    console.log(menuImgEle);

    const h4MenuNameEle = document.createElement('h4');  
    h4MenuNameEle.setAttribute('class', 'card-title');  
    h4MenuNameEle.setAttribute('style', 'color:red;');  
    h4MenuNameEle.textContent = menu.menuName;  
    console.log(h4MenuNameEle);  

    const pMenuDescEle = document.createElement('p');  
    pMenuDescEle.setAttribute('class', 'card-text');  
    pMenuDescEle.textContent = menu.menuDesc;  
    console.log(pMenuDescEle);  

    const pMenuStatusEle = document.createElement('p');  
    pMenuStatusEle.setAttribute('class', 'card-text');  
    pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;  
    console.log(pMenuStatusEle);

    const buttonPriceEle = document.createElement('button');  
    buttonPriceEle.setAttribute('type', 'button');  
    buttonPriceEle.setAttribute('class', 'btn btn-danger');  
    buttonPriceEle.textContent = '฿' + menu.price;  
    console.log(buttonPriceEle);  
    
    cardBody.appendChild(menuImgEle);  
    cardBody.appendChild(h4MenuNameEle);  
    cardBody.appendChild(pMenuDescEle);  
    cardBody.appendChild(pMenuStatusEle);  
    cardBody.appendChild(buttonPriceEle);  
    allMenu.appendChild(cardBody);

}





