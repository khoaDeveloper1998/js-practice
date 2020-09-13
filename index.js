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
// var map = [1, 2, 3, 4, 5].map((n) => {
//   return n * 2;
// });

// console.log("[].map");
// console.log(map);

// console.log("[].filter");

// let filter = [1, 2, 3, 4, 5].filter((n) => {
//   return n >= 3;
// });

// console.log(filter);

// console.log("[].reduce");

// let reduce = [1,2,3,4,5].reduce((accumulator, current) =>{
//     console.log(accumulator);
//     return accumulator + current; 
// })
// console.log(reduce); 


/* Spread Operator Arrays*/

// const arrayOne = ['Maria','Anna','Alex']
// const arrayTwo = ['Said','IsMail','Aisha']

// const concatArray = [...arrayOne];

// concatArray.forEach(name=>{
//     console.log(name);
// })

// const name = 'Marian';
// const nameToArray = [...name];
// nameToArray.forEach(letters => {
//     console.log(letters);
// })

// const addNumbers = (n1,n2,n3) => {
//     return n1 + n2 + n3; 
// }
// const numbers = [1,5,9];

// const result = addNumbers(...numbers);
// console.log(result);

/* Object and Spread Operator */

// const address = {
//     city: 'La',
//     country : 'USA',
//     postcode : 'LA44'
// };
// const name  = {
//     firstName: 'Andy',
//     lastName: 'Johnes'
// }

// const person = {...address,...name};
// console.log(JSON.stringify(person,null,2));
// console.log(Object.keys(person));
