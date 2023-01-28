function confirmEnding(str, target) {
    const targetLen = target.length;
    const strLen = str.length;
    let sameEnding = false;
    for (let i = 0; i <= targetLen; i++){
      if (str[strLen - i] === target[targetLen - i]){
        sameEnding = true;
      } else {
        sameEnding = false;
        break;
      }
    }
    return sameEnding;
}

confirmEnding("Bastian", "n");