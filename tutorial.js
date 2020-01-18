const sum = (num1, num2) => num1 + num2;
const pi = 3.14;
class someMathObject {
    constructor() {
        console.log("object created");
    }
}
/*
module.exports.sum = sum;
//exports the sum function
module.exports.pi = pi;
//exports the variable
module.exports.someMathObject = someMathObject;
//exports the class
*/
module.exports = { sum: sum, pi: pi, someMathObject: someMathObject };