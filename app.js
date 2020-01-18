const tutorials = require('./tutorial');
//print the exports functions from tutorials

console.log(tutorials);
//tutorial work like an object

console.log(tutorials.sum(5, 5));
console.log(tutorials.pi);
console.log(new tutorials.someMathObject);

//console.log(tutorial(1, 1));