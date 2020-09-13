const { log, logTitle } = require("logger");

/* Coding Example */

/* Variables  */
// let name = "Maria Jones";
// let age = 21.5;
// let hasDriverLicence = true;
// console.log(name +" type =  " + typeof name);
// console.log(age +" type =  " + typeof age);
// console.log(hasDriverLicence +" type =  " + typeof hasDriverLicence);

/* Object */
// let person = {
//     name : "Martin Jones",
//     age: 21,
//     hasDriverLicence : true,
//     dateOfBirth: "01/01/2000",
//     address: {
//         firstLine: "123",
//         postcode: "SE1",
//         country: "England"
//     }

// };

// console.log(JSON.stringify(person));

// console.log(Object.values(person));

/* Type coercion and 3 equals sign */
// 2 equals
// console.log(typeof 0  + " " + typeof false);
// console.log(0 == false);
// 3 equals
// console.log(typeof 0  + " " + typeof false);
// console.log(0 === false);

/* Map | Filter  | Reduce */
var map = [1, 2, 3, 4, 5].map((n) => {
  return n * 2;
});

console.log("[].map");
console.log(map);

console.log("[].filter");

let filter = [1, 2, 3, 4, 5].filter((n) => {
  return n >= 3;
});

console.log(filter);

console.log("[].reduce");