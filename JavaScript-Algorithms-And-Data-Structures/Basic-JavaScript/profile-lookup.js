/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.


lookUpProfile("Kristian", "lastName") should return the string Vos
Waiting: lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]
Waiting: lookUpProfile("Harry", "likes") should return an array
Waiting: lookUpProfile("Bob", "number") should return the string No such contact
Waiting: lookUpProfile("Bob", "potato") should return the string No such contact
Waiting: lookUpProfile("Akira", "address") should return the string No such property
*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },

    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },

    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },

    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },

];

function lookUpProfile(name, prop) {
    // Only change code below this line
    const contactsLength = contacts.length;
    for (let i = 0; i < contactsLength; i++) {
        if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
            console.log(contacts[i][prop]);
            return contacts[i][prop];
        } else if (contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) {
            return "No such property";
        }
    }
    return "No such contact";
    // Only change code above this line
}

lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");