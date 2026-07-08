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
const leftHalfSorted = [];
const rightHalfSorted = [];

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

    if (leftHalfSorted[0] === undefined) {
      if (firstNum[0] < secondNum[0]) {
        leftHalfSorted.push(firstNum[0]);
        leftHalfSorted.push(secondNum[0]);
      } else {
        leftHalfSorted.push(secondNum[0]);
        leftHalfSorted.push(firstNum[0]);
      };
      console.log(leftHalfSorted);
      return leftHalfSorted;
    };
    if (leftHalfSorted[0] && rightHalfSorted[0] === undefined) {
      if (firstNum[0] < secondNum[0]) {
        rightHalfSorted.push(firstNum[0]);
        rightHalfSorted.push(secondNum[0]);
      } else {
        rightHalfSorted.push(secondNum[0]);
        rightHalfSorted.push(firstNum[0]);
      };
      console.log(rightHalfSorted);
      return rightHalfSorted;
    };
    if (firstNum.length !== 1 && secondNum.length !== 1) {
      let i = 0;
      let j = 0;
      let totalLoops = leftHalfSorted.length + rightHalf.length;
      resultArray.push(rightHalfSorted[j]);
      console.log(totalLoops, resultArray.length);
        if (leftHalfSorted[0] !== undefined && rightHalfSorted[0] !== undefined) {
          if (leftHalfSorted[i] > rightHalfSorted[j]) {
            resultArray.push(rightHalfSorted[j]);
            j++;
          } else if (leftHalfSorted[i] < rightHalfSorted[j]) {
            resultArray.push(leftHalfSorted[i]);
            i++;
          };
        };
        if (leftHalfSorted[0] === undefined) {
          rightHalfSorted.forEach( (elem) => {
            resultArray.push(elem);
          });
        } else if (rightHalfSorted[0] === undefined) {
          leftHalfSorted.forEach( (elem) => {
            resultArray.push(elem);
          });
        };
      console.log(resultArray);
      return resultArray;
    }
  };
};
mergeSort([10,5,11,7]); 

/* if (resultArray[0] === undefined) {
      resultArray[0] = arrayList[0];
      console.log(resultArray);
    };
    if (resultArray[0] && resultArray[1] === undefined) {
      const firstNum = resultArray[0];
      const secondNum = arrayList[0];
      if (firstNum < secondNum) {
        resultArray = [firstNum, secondNum];
      } else {
        resultArray = [secondNum, firstNum];
      };
      console.log(resultArray)
    };

    if (resultArray[1]) {
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] > arrayList[0]) {
          resultArray.splice(i, 0, arrayList[0]);
          //resultArray[i] = arrayList[0];
          //const restOfresultArrayCopy = resultArrayCopy.slice([i]);
          //for (let i = 0; i < restOfresultArrayCopy.length; i++) {
          //  resultArray.push(restOfresultArrayCopy[i]);
          //};
          break;
        };
        if (resultArray[i] < arrayList[0]) {
          resultArray[resultArray.length] = resultArrayCopy[i];
        };
      };
    };
    console.log(resultArray);
    return arrayList;
*/

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
