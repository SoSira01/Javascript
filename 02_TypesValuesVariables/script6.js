//var std = 10;
//var std = 'myStudent';//redeclared std variable
function doSomething(){
    var msg ='INT201-JS';
    console.log(msg);
    console.log(typeof(msg));
}
console.log(doSomething());
//console.log(std);

let n;
n = 'cat';

if(typeof(n)=='number'){
  console.log(`This is number`)
  if(n > 5){
  console.log(`number is more than 5 and the number is ${n}`);
}else 
  console.log(`No the number is ${n}`);
}else 
  console.log(`No! this is not a number, this is ${typeof(n)}`);

