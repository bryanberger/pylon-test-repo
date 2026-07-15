const { add, subtract } = require('./math');
const { greet } = require('./greet');

console.log(greet('world'));
console.log('2 + 3 =', add(2, 3));
console.log('5 - 1 =', subtract(5, 1));
