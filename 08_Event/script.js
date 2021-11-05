//1. query target node
const okBtn = document.querySelector('#submitOK');
const divBtn = document.querySelector('#divButtonPanel');

console.log(okBtn);

//2. register event handler to target node 
//okBtn.onclick = showMessage;
okBtn.addEventListener('click',showMessage,false)
divBtn.addEventListener(
  'click',
  (e) => {
    alert('div click !!'+ 
    '\nevent target : ' + e.target +
    '\nevent current target : ' + e.currentTarget +
    '\nevent phase : ' + e.eventPhase + 
    '\nevent type : ' + e.type);
  },false
  );

//okBtn.onclick = null;
//3. prepare event handler 
function showMessage(e) {
  alert(`submit button click!!
         event target id : ${e.target.id}
         event current target : ${e.currentTarget}
         event phase : ${e.eventPhase}
         event type : ${e.type}`);
}
//okBtn.onclick = () => { alert("Good bye"); };
console.log('Hello world');




