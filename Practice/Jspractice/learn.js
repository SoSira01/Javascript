//#1 
let num1=10;
let num2=20;
num2=num1; //num1 assign to value 10 num2 
num2=55;
console.log(num1);
console.log(num2);

//#2 object เปลี่ยนตามอันไหม่ละเหมือนกันหมด
let std1 = {id: 1,name:"Susan"}
let std2 = {id: 2,name:"John"}
std2 = std1; //num1 assign value point to the same memory address
std2.name= "peter";
console.log(std1);
console.log(std2);

console.log(num1 == num2);
console.log(std1 ===std2);

//#3
function doSomething(student){ //student formal parameter   //student = std3
 student.id = 635000111;
}
let std3 = {id: 2,name:'Joe'}
doSomething(std3);//std3 is an actual parameter
console.log(std3);

//#4
function doSomething(num){ //num+num3
    num = 55;
}
let num3 = 1;
doSomething(num3);
console.log(num3); 

//#5
let arr = [1,2,3,4];
let arr2 =arr;
arr2[1] = 999;
console.log(arr);

function doSomething(temp){
    for(let i = 0;i<temp.lenght;i++){
        temp[i] = temp[i]*2;
    }
}
doSomething(arr);
console.log(arr);
//#6
let colors = [
    ['pink', 'red'], //element#1
    ['yellow', 'orange', 'brown'] //element#2
  ];  
  console.log(colors.length - 1);
  console.log(colors[0][colors[0].length - 1]);
  console.log(colors[colors.length - 1][colors[1].length - 1]);
  //#7
  let students = [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Peter' },
    { id: 3, name: 'Mary' }
  ];
  console.log(students[0]);
  students[students.length - 1].name = 'Umaporn';
  console.log(students[students.length - 1]);
