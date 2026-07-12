export {mergeSort};

/*
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
};
*/

let resultArray = [];

const mergeSort = function(arrayList) {
  if (arrayList.length === 0) return [];
  if (arrayList.length === 1) return arrayList;
  if (arrayList.length > 1) {
    let middleOfArray = Math.floor(arrayList.length / 2);

    const leftHalf = arrayList.slice(0,middleOfArray);
    const rightHalf = arrayList.slice(middleOfArray, arrayList.length);
    console.log(leftHalf, rightHalf);

    const firstNum = mergeSort(leftHalf);
    const secondNum = mergeSort(rightHalf);  
    console.log(firstNum, secondNum);

    if (resultArray[0] === undefined) {
      if (firstNum[0] < secondNum[0]) {
        resultArray.push(firstNum[0]);
        resultArray.push(secondNum[0]);
      } else {
        resultArray.push(secondNum[0]);
        resultArray.push(firstNum[0]);
      };
      console.log(resultArray);
      return resultArray;
    };
  
    let sortingArray = [];

    if (resultArray[0] !== undefined) {
      let i = 0;
      let j = 0;
      let nrOfIterations = 0;
      let loopStoper = firstNum.length + secondNum.length + 10;

      for (;i < firstNum.length, j < secondNum.length;) {
        if (firstNum[i] > secondNum[j]) {
          sortingArray.push(secondNum[j]);
          j++;
        } else if (firstNum[i] < secondNum[j]) {
          sortingArray.push(firstNum[i]);
          i++;
        } else if (firstNum[i] === secondNum[j]) {
          sortingArray.push(firstNum[i]);
          sortingArray.push(secondNum[j]);
          i++;
          j++;
        };
        
        if (i === firstNum.length) {
          for (let k = j; k < secondNum.length; k++) {
            sortingArray.push(secondNum[k]);
          };
          resultArray = sortingArray;
          console.log(resultArray);
          return resultArray;
        };
        if (j === secondNum.length) {
          for (let k = i; k < firstNum.length; k++) {
            sortingArray.push(firstNum[k]);
          };
          resultArray = sortingArray;
          console.log(resultArray);
          return resultArray;
        };
        
        nrOfIterations++
        if (nrOfIterations > loopStoper) {
          break;
        };
        console.log(sortingArray);
      };
    };
  };
};
mergeSort([9,8,7,6,5,4,3,2,0]); 

console.log(mergeSort([]));
