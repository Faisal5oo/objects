const {
  keyObjects,
  keyValue,
  keyEntrie,
  keyProperty,
  keyMerged,
  keyFreeze,
} = require("./objects");

let persons = {
  name: "faisal",
  age: "21",
};

// keyObjects(persons);
// console.log(keyObjects(persons));

// keyValue(persons);
// console.log(keyValue(persons));

//object.Entries()
// keyEntrie(persons);
// console.log(keyEntrie(persons));

// hasownproperty()
keyProperty(persons);
console.log(keyProperty(persons));

// object.assign

const target = {
  name: "feroz don",
};

const source = {
  job: "developer",
  age: "34",
};

keyMerged(target, source);
console.log(keyMerged(target, source));

// freeze()

keyFreeze(persons);

persons.age = 50;
console.log(persons);
