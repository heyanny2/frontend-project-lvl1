import randFromInt from '../util.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const findCorrectAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator - ${operator}`);
  }
};

const generateRound = () => {
  const randomNum1 = randFromInt(0, 30);
  const randomNum2 = randFromInt(0, 30);
  const randOperator = operators[randFromInt(0, operators.length - 1)];
  const statement = `${randomNum1} ${randOperator} ${randomNum2}`;
  const correctAnswer = String(findCorrectAnswer(randomNum1, randOperator, randomNum2));
  return [correctAnswer, statement];
};

export { generateRound, gameRules };
