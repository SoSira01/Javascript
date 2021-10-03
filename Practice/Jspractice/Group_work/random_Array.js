//use Array and loop 

let numArray = [];    //declare Array in global scope to let you can use in every function

function randomNum(){      // random number and assign in Array begin in index 0
    for(i=0;i<3;i++){
      number = Math.floor(Math.random() * 100) + 1;
        numArray[i] = number;
    } 
    return numArray;
}

function Sum(){     //find sum by declare variable to collect the sum of number in array using loop
  let sum = 0;      //need to assign sum=0 because we need to assign data type for sum to collect number from array
  for(i=0;i<numArray.length;i++){
     sum += numArray[i];
  }
  return sum;
}

function Max(){     //find max by declare 2 variable. one for collect the most value in array and another use for compare with most value
  let max = 0;      // same at line 48 and we assign 0 because the lowest possible number in array is 1
  for(i=0;i<numArray.length;i++){
     compare = numArray[i];
      if(max > compare){
        return max;
      }else {max = compare}
  }
  return max;
}

function Min(){      //find min by declare 2 variable. one for collect the smallest value in array and another use for compare with smallest value
  let min = 101;     // same at line 48 and we assign 101 because the highest possible number in array is 100
  for(i=0;i<numArray.length;i++){
     compare = numArray[i];
      if(min < compare){
        return min;
      }else {min = compare}
  }
  return min;
}

console.log(`Random Number = ${randomNum()}`);
console.log(`Sum = ${Sum()}`);
console.log(`Max = ${Max()}`);
console.log(`Min = ${Min()}`);