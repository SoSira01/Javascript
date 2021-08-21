function changeCalculator(order, pay) {
  if (pay <= order) return -1;
  change = pay - order;
  let changeResult = {};
  changeResult.B500 = Math.floor(change / 500);
  changeResult.B100 = Math.floor((change % 500) / 100);
  changeResult.B50 = Math.floor(((change % 500) % 100) / 50);
  changeResult.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
  changeResult.B5 = Math.floor(((((change % 500) % 100) % 50) % 20) / 5);
  changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
  changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
  return changeResult;
}
console.log(changeCalculator(222, 1000));
