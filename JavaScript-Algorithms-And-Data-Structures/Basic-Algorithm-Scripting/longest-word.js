function findLongestWordLength(str) {
    const words = str.split(" ");
    const wordCount = words.length;
    let longestWord = '';

    for (let i = 0; i < wordCount; i++){
      if (words[i].length > longestWord.length){
        longestWord = words[i];
      }
    }
    return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");