function sumAll(arr) {
    let smallerNum = arr[0];
    let largerNum = arr[1];
    let count = 0;

    if (smallerNum > largerNum){
      smallerNum = arr[1];
      largerNum = arr[0];
    }

    for (let i = smallerNum; i <= largerNum; i++){
      count += i;
    }

    return count;
}

sumAll([1, 4]);