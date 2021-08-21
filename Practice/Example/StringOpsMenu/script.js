function displayMenu() {
  const menu = `
  ***Main Menu***
  1: Reverse String
  2: Replace Vowels with '*'
  3: Count Vowels in String`;
  return menu;
}
function findVowels(letter) {
  switch (letter) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      return '*';

    default:
      return letter;
  }
}

function stringOps(yourString, userMenu) {
  let resultString = '';
  if (userMenu === 1) {
    for (let i = yourString.length - 1; i >= 0; i--) {
      resultString += yourString[i];
    }
  } else if (userMenu === 2) {
    for (let i = 0; i < yourString.length; i++) {
      resultString += findVowels(yourString[i]);
    }
  } else if (userMenu === 3) {
    resultString = 0;
    for (let i = 0; i < yourString.length; i++) {
      if (findVowels(yourString[i]) === '*') {
        resultString += 1;
      }
    }
  }
  return resultString;
}

console.log(displayMenu());
let choseMenu = 2;
let yourString = 'Hello World';
console.log(stringOps(yourString, choseMenu));
