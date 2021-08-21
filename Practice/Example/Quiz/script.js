const TOTAL_QUESTION = 5;

let quest1 = {
  question: 'What is the capital of Thailand?',
  answers: ['Khon kaen', 'Chiang Mai', 'Bangkok', 'Pattaya'],
  correctAnswer: 3
};

let quest2 = {
  question: `What is the result of '1' - 1 ?`,
  answers: [0, 'NaN', '11', 'error'],
  correctAnswer: 1
};

let quest3 = {
  question: `Where do we live in ?`,
  answers: ['Venus', 'Pluto', 'Earth', 'Mercury'],
  correctAnswer: 3
};

let quest4 = {
  question: `What is a primitive number data type?`,
  answers: ['1', 1, `1`, '1'],
  correctAnswer: 2
};

let quest5 = {
  question: `what is the biggest star in the Milky way?`,
  answers: ['Jupiter', 'Earth', 'Sun', 'Cow Milk!!!'],
  correctAnswer: 3
};

let questions = [quest1, quest2, quest3, quest4, quest5];

function play(player, userNumOfQuestions) {
  for (let i = 0; i < userNumOfQuestions; i++) {
    let randQuestion = Math.floor(Math.random() * TOTAL_QUESTION);
    console.log(`Question #${i + 1}`);
    player.choseQuests[i] = questions[randQuestion];
    console.log(questions[randQuestion]);
    let randUserAnswer = Math.floor(Math.random() * 4) + 1;
    console.log(`User answer: ${randUserAnswer}`);
    player.userAnswers[i] = randUserAnswer;

    if (player.choseQuests[i].correctAnswer === player.userAnswers[i]) {
      console.log(`correct!`);
      player.correctPoints += 1;
    } else console.log(`incorrect!`);
  }
}
let player = { id: '1', choseQuests: [], userAnswers: [], correctPoints: 0 };
play(player, 3);

console.log(`------player account-------`);
console.log(player);
