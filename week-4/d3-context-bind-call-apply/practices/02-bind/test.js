// Your code here
const Employee = require('./employee');

const john = new Employee('John Wick', 'Dog Lover')

// setTimeout(john.sayName, 2000); john.SayName = function so it will access to global obj

const sayName = john.sayName.bind(john);

setTimeout(sayName, 2000);


setTimeout(john.sayOccupation.bind(john), 3000);
