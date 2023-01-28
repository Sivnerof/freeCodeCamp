function titleCase(str) {
    const allLower = str.toLowerCase();
    let indivWords = allLower.split(' ');
    const indivWordsLen = indivWords.length;

    for (let i = 0; i < indivWordsLen; i++){
      indivWords[i] = indivWords[i].charAt(0).toUpperCase() + indivWords[i].slice(1);
    }
    return indivWords.join(' ');
}

titleCase("I'm a little tea pot");