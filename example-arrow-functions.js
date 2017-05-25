var names = ['Jason', 'Slavica', 'Yeoshua', 'Eliza'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Jason'));

// var person = {
//   name: 'Jason',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says hello to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(add(0, 9))

console.log(addStatement(4,5));
console.log(addExpression(1,6));
