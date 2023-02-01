const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  const newArr = arr.concat([]);
  return newArr.sort((a, b) => {return a - b});
}

nonMutatingSort(globalArray);