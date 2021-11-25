// 1. synchronous tasks
// console.log(`hello `);
// console.log(`world ,`);
// console.log(`Good bye`);

// 2. asynchronous tasks
console.log(`hello `);

let word = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`world, `);
    resolve('success');
  }, 7000);
});

word.then((returnWord) => {
  console.log(`Good bye: ${returnWord}`);
});