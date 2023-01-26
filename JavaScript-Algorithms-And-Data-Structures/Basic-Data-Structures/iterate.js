function filteredArray(arr, elem) {
    let newArr = [];
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
      if (arr[i].indexOf(elem) < 0) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));