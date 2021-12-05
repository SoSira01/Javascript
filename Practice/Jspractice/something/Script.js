import {getInputValue,clearAll} from "./function.js";

const all = document.getElementById('all');

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


