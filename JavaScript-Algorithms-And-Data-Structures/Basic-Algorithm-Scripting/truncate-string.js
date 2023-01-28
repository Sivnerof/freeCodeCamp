function truncateString(str, num) {
    let truncStr = '';
    if (str.length === num || str.length < num){
      return str;
    }
    for (let i = 0; i < num; i++){
      truncStr += str[i];
    }
    return truncStr + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);