function operationMenu() {
  const menu = `
  ***Main Menu***
  1: Find Sum
  2: Find Minimum Value
  3: Find Maximum Value`;
  return menu;
}
function randNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function findMin(n1, n2, n3) {
  let min = n1;
  if (n2 < min) min = n2;
  if (n3 < min) min = n3;
  return min;
}
function findMax(n1, n2, n3) {
  let max = n1;
  if (n2 > max) max = n2;
  if (n3 > max) max = n3;
  return max;
}
function findSum(n1, n2, n3) {
  return n1 + n2 + n3;
}

function operation(n1, n2, n3, fn) {
  console.log(`Your random numbers are 
    random number#1: ${n1}
    random number#2: ${n2}
    random number#3: ${n3}`);
  return fn(n1, n2, n3);
}

console.log(operationMenu());
let userMenu = 1;

let rand1 = randNumber();
let rand2 = randNumber();
let rand3 = randNumber();

switch (userMenu) {
  case 1:
    console.log(`sum = ${operation(rand1, rand2, rand3, findSum)}`);
    break;
  case 2:
    console.log(`min = ${operation(rand1, rand2, rand3, findMin)}`);
    break;
  case 3:
    console.log(`max = ${operation(rand1, rand2, rand3, findMax)}`);
    break;
}
