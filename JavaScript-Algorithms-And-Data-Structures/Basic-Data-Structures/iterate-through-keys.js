const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}

function countOnline(usersObj) {
    let usersOnline = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        usersOnline++;
      }
    }
    return usersOnline;
}

console.log(countOnline(users));