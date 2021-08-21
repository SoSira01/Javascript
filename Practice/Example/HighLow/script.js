function randNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
const randValue = randNumber();
let guessValue = 5;
if (randValue >= 1 && randValue <= 10) {
  if (randValue > guessValue) {
    console.log(`Too Low, the random number is ${randValue}`);
  } else if (randValue < guessValue) {
    console.log(`Too High, the random number is ${randValue}`);
  } else console.log('You Win!');
}
