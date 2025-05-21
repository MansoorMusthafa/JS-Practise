// const person = {
//   Name: "Mansoor",
//   age: 24,
//   subject: {
//     math: 98,
//     science: 100,
//   },
// };

// person.subject.english = 96;
// console.log(person);

// for deleting the property inside object
// delete person.subject.english;
// console.log(person)

// There are Two types to access object in js using .notation & Bracket Notation
// for example

// console.log(person.Name);  /// .notation
// console.log(person["Name"]);  /// .notation
const person = {
  Name: "Mansoor",
  ["age"]: "14",
  fun: function abc(a, b) {
    console.log("this is function inside object");
    return a + b;
  },
};

console.log(person["age"]);
console.log(person.fun(7, 2));

// BUILT IN OBJECTS   (They are provided in the language)
// console.log() console is an object .log is an function
// Math.random() Math is an object .random is an function

// --------------------// JSON & localStorage-------------------

// JSON BUILT IN OBJECT
// JSON - Javascript object Notation

// JSON is similar to javascript object syntax but in less features
// Json Cannot accept function inside object
// both key and value should be double quotation.
// We use Json when we send data between computers because it is universal

//  To COnvert Js Object to JSon

// console.log(JSON.stringify(person));

let ObjectToJson = JSON.stringify(person);
// To Convert Json to JS Object
console.log(ObjectToJson);

let JsonToObject = JSON.parse(ObjectToJson);
console.log(JsonToObject);

// LOCALSTORAGE

//  To save value more permanently
// Local storage Only Supports String
