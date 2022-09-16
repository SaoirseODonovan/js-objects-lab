//Part 01
// const aCar = {
//     owner : "Joe Bloggs",

//     type : {
//       make : 'Toyota',
//       model : 'Corolla',
//       cc : 1.8
//   },

//     registration : '201WD1058'
//   };
  
//   console.log(aCar.owner + ' drives a ' + aCar.type.make);

//Part 02
// const aCar = {
//   owner: "Joe Bloggs",
//   type: {
//     make: "Toyota",
//     model: "Corolla",
//     cc: 1.8
//   },
//   registration: { year: 201, county: "WD", number: 1058 }
// };

// console.log(aCar.owner + " drives a " + aCar.type.make);
// console.log(
//   "Reg. = " +
//     aCar.registration.year +
//     "-" +
//     aCar.registration.county +
//     "-" +
//     aCar.registration.number
// );

//Part 3
// const aCar = {
//   owner: "Joe Bloggs",
//   type: {
//     make: "Toyota",
//     model: "Corolla",
//     cc: 1.8
//   },
//   registration: { year: 201, county: "WD", number: 1058 }
// };

// console.log(aCar.owner + " drives a " + aCar.type.make);
// console.log(
//  "Reg. = " +
//    aCar.registration.year +
//    "-" +
//    aCar.registration.county +
//    "-" +
//    aCar.registration.number
// );

// aCar.milage = 10000
// aCar.color = {
//  exterior: "red",
//  interior: { texture: "leather", shade: "cream" }
// }

// console.log(
//  "It is a " +
//    aCar.color.exterior +
//    " car, " +
//    aCar.milage +
//    " milage, with " +
//    aCar.color.interior.texture +
//    " interior."
// );

//Part 4
const aCar = {
  owner: "Joe Bloggs",
  address : '3 Walkers Lane',
  previous_owners: [
    { name: "Pat Smith", address: "1 Main Street" },
    { name: "Sheila Dwyer", address: "2 High Street" }
  ],
  type: {
        make: "Toyota",
        model: "Corolla",
        cc: 1.8
      },
      registration: { year: 201, county: "WD", number: 1058 }
    };

console.log(
  "name : " +
    aCar.previous_owners[0].name +
    ', address : ' +
    aCar.previous_owners[0].address
)