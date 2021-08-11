// start with strings, numbers and booleans
let age = 111;
let age2 = age;
age = 200;
console.log(age, age2);

let name = "Miya";
let name2 = name;
name = "Mariya";
console.log(name, name2);
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:

//team[3] = " Miya";
console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[2] = "Miya";
console.log(players, team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[4] = "Mariya";
console.log(players, team3);
const team4 = Array.from(players);
team4[4] = " Miya Peynova";
console.log(players, team4);

// or use the new ES6 Spread
const team5 = [...players];
team5[4] = "Peynova";
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const capitan = person;
capitan.number = 99;
console.log(capitan);

// how do we take a copy instead?

const capitan2 = Object.assign({}, person, { number: 199, age: 21 });
console.log(person, capitan2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const miya = {
  name: " Miya",
  age: 31,
  social: {
    twitter: "@miyadev",
    instagram: "@miyadeveloper",
  },
};

console.log(miya);

//the poor man's deep clone
const dev = JSON.parse(JSON.stringify(miya));
dev.social.instagram = " @miya_fullstackdev";
console.log(miya, dev);
