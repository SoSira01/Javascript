//------------------------------------array destructuring assingment + rest parameter------------------------------------
[subject,student,...listOfStudent] = ['INT201',50,'A','B','C'] ;
console.log(subject);
console.log(student);
console.log(listOfStudent);

//------------------------------------object destructuring assignment +rest parameter------------------------------------
({ productId, productName, ...rest } = { 
    productName: 'Coke',  
    productId: 111, 
    productPrice: 10, 
    productStock: 5
});
console.log(productId);
console.log(productName);
console.log(rest);
rest.productPrice = 200;
console.log(rest);



//------------------------------------function declaration------------------------------------
function sum(numbers) { 
let total = 0; 
//local variable  
for (let num of numbers) 
total += num; 
return total;
}
console.log(sum([1, 2, 3]));
//calling function, function execution
sum([1, 2, 5, 10]);


//------------------------------------function expressionconst------------------------------------
myFunc = function (numbers){
let total = 0; 
//local variable  for (let num of numbers) 
total += num;  
return total;};
//calling function, function execution
console.log(myFunc([1, 2, 3]));


//1.--------------------------------------------------
function getCourse(){ 
return 'INT201 Client Side Programming I';
}
//1.arrow function
let getCourse = () => 'INT201 Client Side Programming I';

//2.--------------------------------------------------
function echo(text) {  
return text;
}
//2.arrow function
let echo = (text) => text; 

//3.--------------------------------------------------
function isKMUTTStudent(student) { 
if (student.id.length == 13) 
return true;  else return false;
}
//3.arrow function
let isKMUTTStudent = (student) => student.id.length == 13;

//4.--------------------------------------------------
function sum(num1, num2, num3) {
return num1 + num2 + num3;
}
//4.arrow function
let sum = (num1,num2,num3) => num1+num2+num3;

//5.--------------------------------------------------
function greetingSomeOne(name) { 
const greeting = ['hi', 'hello', 'hey']; 
return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}
//5.arrow function
let greetingSomeOne = (name) => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]},${name}`;
}




