function largestOfFour(arr) {
    const largeNumsArr = [];
    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i++){
      let largestNum = arr[i][0];
      const subArrLen = arr[i].length;
      for (let j = 0; j < subArrLen; j++){
        if (arr[i][j] > largestNum){
          largestNum = arr[i][j];
        }
      }
      largeNumsArr.push(largestNum);
    }
    return largeNumsArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);