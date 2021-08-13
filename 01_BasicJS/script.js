//variables, funtion names, and operators are all case sensitive
//Statements in ECMAScript are terminated by a semicolon
//Even semicolon is not required but not recommended to omit the semicolon

let num = 5;
let Num = 'This is not a number';
console.log('num is ' + num);
console.log('Num is ' + Num);

//Multiple statements can be combined into a code block by using {}
//require code block only when executing multiple statements.

if (num == 5) {
  console.log(num + ' equal to 5.');
} else {
  console.log(num + 'is not equal to 5.');
}

let myNum = 0;
console.log(`type of myNum is ${typeof myNum}`);

let myString = 'Good';
console.log(`type of myString is ${typeof myString}`);

let myBool = true;
console.log(`type of myBool is ${typeof myBool}`);

let myUndefined;
console.log(`type of myUndefined is ${typeof myUndefined}`);

let mySymbol = Symbol();
console.log(`type of mySymbol is ${typeof mySymbol}`);

let myNull = null;
console.log(`type of myNull is ${typeof myNull}`);

console.log('Good bye!');
