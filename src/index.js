//import './styles.css'

const fibs = function(fibNums) {
  testTheArgument(fibNums);
  const fibonacciNumbers = [0, 1, 1];
  for (let i = fibonacciNumbers.length; i < fibNums; i++) {
    const firstPreviousNum = fibonacciNumbers[i - 1];
    const secondPreviousNum = fibonacciNumbers[i - 2];
    const nextFibonacciNum = firstPreviousNum + secondPreviousNum;
    fibonacciNumbers.push(nextFibonacciNum);
  }
  console.log(fibonacciNumbers);
  return fibonacciNumbers;
};
fibs(20);

let fibonacciNumbersRec = [0, 1, 1];
const fibsRec = function(fibNums) {
  testTheArgument(fibNums);
  if (fibonacciNumbersRec.length === fibNums) {
    console.log(fibonacciNumbersRec);
    return fibonacciNumbersRec;
  };
  if (fibonacciNumbersRec !== fibNums) {
    const firstPreviousNum = fibonacciNumbersRec[fibonacciNumbersRec.length - 1];
    const secondPreviousNum = fibonacciNumbersRec[fibonacciNumbersRec.length - 2];
    const nextFibonacciNum = firstPreviousNum + secondPreviousNum;
    fibonacciNumbersRec.push(nextFibonacciNum);
  };
  fibsRec(fibNums);
};
fibsRec(8);

function testTheArgument(fibNumsTest) {
  if (!(Number.isInteger(fibNumsTest))) throw new Error("The argument in not an integer number.");
  if (fibNumsTest < 0) throw new Error("The argument is smaller than 0.");
  if (fibNumsTest === 0) return console.log([0]);
  if (fibNumsTest === 1) return console.log([0,1]);
  if (fibNumsTest === 2 || fibNumsTest === 3) return console.log([0,1,1]);
}