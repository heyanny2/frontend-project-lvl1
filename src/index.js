import readlineSync from 'readline-sync';

const roundsCount = 3;

const startEngine = (generateRound, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [correctAnswer, statement] = generateRound();
    console.log(`Question: ${statement}`);
    const answer = readlineSync.question('Your answer? ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
