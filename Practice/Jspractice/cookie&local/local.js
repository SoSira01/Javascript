//set localStorage
localStorage.setItem('myCat', 'Tom');
//read 
const cat = localStorage.getItem('myCat');
//remove 
localStorage.removeItem('myCat');
//remove all
localStorage.clear();

//------------------ ex. -------------------------------
let greyMode  = localStorage.getItem('bgColor');
const greyModeToggle = document.querySelector('#mode');
const bodyBg = document.querySelector('#body');

if(greyMode === 'grey'){
  enableGreyMode();
}

function enableGreyMode(){
    bodyBg.style = 'background-color:lightgrey;';
    greyModeToggle.className = 'bx bxs-toggle-right bx-lg';
    localStorage.setItem('bgColor' , 'grey'); //สีเทา
}

function disableGreyMode(){
  bodyBg.style = 'background-color:white;';
  greyModeToggle.className = 'bx bxs-toggle-left bx-lg';
  localStorage.setItem('bgColor' , 'null'); //สีขาว
}

greyModeToggle.addEventListener('click', () => {
  greyMode  = localStorage.getItem('bgColor');
  if(greyMode === 'null'){
    enableGreyMode();
  }else{
    disableGreyMode();
  }
  }

);

