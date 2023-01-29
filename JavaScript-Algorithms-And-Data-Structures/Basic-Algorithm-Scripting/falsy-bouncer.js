function bouncer(arr) {
    const arrLen = arr.length;
    let arrTrueVals = [];

    for (let i = 0; i < arrLen; i++) {
      if (Boolean(arr[i]) == true){
        arrTrueVals.push(arr[i]);
      }
    }
    console.log(arrTrueVals);
    return arrTrueVals;
}

bouncer([7, "ate", "", false, 9]);