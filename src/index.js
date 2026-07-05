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
  console.log(resultArray);
  const resultArrayCopy = resultArray.slice();
  resultArray = [];

  if (arrayList.length === 0) return [];

  if (arrayList.length === 1) {
    if (resultArrayCopy[0] === undefined) {
      resultArray[0] = arrayList[0];
      console.log(resultArray);
    };

    if (resultArrayCopy[0] && resultArrayCopy[1] === undefined) {
      const firstNum = resultArrayCopy[0];
      const secondNum = arrayList[0];
      if (firstNum < secondNum) {
        resultArray = [firstNum, secondNum];
      } else {
        resultArray = [secondNum, firstNum];
      };
      console.log(resultArray)
    };

    if (resultArrayCopy) {
      for (let i = 0; i < resultArrayCopy.length; i++) {
        if (resultArrayCopy[i] > arrayList[0]) {
          resultArray[i] = arrayList[0];
          const restOfresultArrayCopy = resultArrayCopy.slice([i]);
          for (let i = 0; i < restOfresultArrayCopy.length; i++) {
            resultArray.push(restOfresultArrayCopy[i]);
          };
          break;
        };
        if (resultArrayCopy[i] < arrayList[0]) {
          if (resultArray[0] === undefined) {
            resultArray[0] = resultArrayCopy[i];
          } else {
            resultArray[resultArray.length] = resultArrayCopy[i];
          };
        };
      };
    };
    console.log(resultArray);
    return arrayList;
  };
/*  
  if (arrayList.length === 2) {
    const firstNum = arrayList[0];
    const secondNum = arrayList[1];
    if (firstNum < secondNum) {
      resultArray = [firstNum, secondNum];
    } else {
      resultArray = [secondNum, firstNum];
    };
    console.log(resultArray)
    return resultArray;
  };
/*
  if (arrayList.length === 3) {
    console.log(arrayList);
    const splitedArray = arrayList.slice(0,2);
    const rightHalf = arrayList[2];
    console.log(splitedArray);
    const sortedSplitedArray = mergeSort(splitedArray);
    if (arrayList[2] < sortedSplitedArray[0]) {
      arrayList[0] = arrayList[2];
      arrayList[1] = sortedSplitedArray[0];
      arrayList[2] = sortedSplitedArray[1];
    } else if (arrayList[2] > sortedSplitedArray[0]){
      arrayList[0] = sortedSplitedArray[0];
      if (arrayList[2] < sortedSplitedArray[1]) {
        arrayList[1] = arrayList[2];
        arrayList[2] = sortedSplitedArray[1];
      } else (arrayList[2] > sortedSplitedArray[1])
        arrayList[1] = sortedSplitedArray[1];
        arrayList[2] = rightHalf;
    };
    console.log(arrayList);
    return arrayList
  };
  if (arrayList.length === 4) {
    const splitedArrayFirst1 = arrayList.slice(0,2);
    const splitedArraySecond2 = arrayList.slice(2,4);
    console.log(splitedArrayFirst1);
    console.log(splitedArraySecond2);
    const sortedSplitedArrayFirst1 = mergeSort(splitedArrayFirst1);
    const sortedSplitedArraySecond2 = mergeSort(splitedArraySecond2);
    if (sortedSplitedArrayFirst1[0] < sortedSplitedArraySecond2[0]) {
      arrayList[0] = sortedSplitedArrayFirst1[0];
      if (sortedSplitedArrayFirst1[1] < sortedSplitedArraySecond2[0]) {
        arrayList[1] = sortedSplitedArrayFirst1[1];
        arrayList[2] = sortedSplitedArraySecond2[0];
        arrayList[3] = sortedSplitedArraySecond2[1];
      };
      if (sortedSplitedArrayFirst1[1] > sortedSplitedArraySecond2[0]) {
        arrayList[1] = sortedSplitedArraySecond2[0];
      };
      if (sortedSplitedArrayFirst1[1] > sortedSplitedArraySecond2[1]) {
        arrayList[2] = sortedSplitedArraySecond2[1];
        arrayList[3] = sortedSplitedArrayFirst1[1];
      };
      if (sortedSplitedArrayFirst1[1] < sortedSplitedArraySecond2[1]) {
        arrayList[2] = sortedSplitedArrayFirst1[1];
        arrayList[3] = sortedSplitedArraySecond2[1];
      };
    };
    if (sortedSplitedArrayFirst1[0] > sortedSplitedArraySecond2[0]) {
      arrayList[0] = sortedSplitedArraySecond2[0];
      if (sortedSplitedArrayFirst1[0] > sortedSplitedArraySecond2[1]) {
        arrayList[1] = sortedSplitedArraySecond2[1];
        arrayList[2] = sortedSplitedArrayFirst1[0];
        arrayList[3] = sortedSplitedArrayFirst1[1];
      };
      if (sortedSplitedArrayFirst1[0] < sortedSplitedArraySecond2[1]) {
        arrayList[1] = sortedSplitedArrayFirst1[0];
        if (sortedSplitedArrayFirst1[1] < sortedSplitedArraySecond2[1]) {
          arrayList[2] = sortedSplitedArrayFirst1[1];
          arrayList[3] = sortedSplitedArraySecond2[1];
        };
        if (sortedSplitedArrayFirst1[1] > sortedSplitedArraySecond2[1]) {
          arrayList[2] = sortedSplitedArraySecond2[1];
          arrayList[3] = sortedSplitedArrayFirst1[1];
        };
      };
    };
    console.log(arrayList);
    return arrayList
  };
*/
  if (arrayList.length > 1) {
    let middleOfArray = Math.floor(arrayList.length / 2);
    const firstNum = arrayList.slice(0,middleOfArray);
    const secondNum = arrayList.slice(middleOfArray, arrayList.length);
    mergeSort(arrayList.slice(0,middleOfArray));
    mergeSort(arrayList.slice(middleOfArray, arrayList.length));
  };
};
mergeSort([10,5,2,3,1,4]);