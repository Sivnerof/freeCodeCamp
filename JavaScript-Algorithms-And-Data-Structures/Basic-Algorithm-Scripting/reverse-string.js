function reverseString(str) {
    let reversedStr = '';
    const strLen = str.length;
    const startPoint = strLen - 1;
    for (let i = startPoint; i >= 0; i--){
      reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("hello"));