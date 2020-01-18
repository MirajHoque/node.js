const EventEmitter = require('events');
//EventEmitter is a class within event module.
//event module->allows to do event driven programming
//event driven programming->program flow determined by events.
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1, num2) => {
        console.log(num1 + num2);
    })
    //takes 2 argument
    //listener->function attach to the object, that would be called when event is raised
    //function->want to execute

eventEmitter.emit('tutorial', 1, 2);
//emit->making noise or produce something
//here signaling that an event is raised

//with custom object

class person extends EventEmitter {
    constructor(name) {
        super();
        //references to it's parent constructor 
        this._name = name;

    }
    get name() {
        return this._name;
    }
}

let someone = new person('Ramos');
let best = new person("Cristiano Ronaldo");
someone.on('name', () => {
    console.log("The best defender is " + someone.name);
})
best.on('name', () => {
    console.log("Remember the name " + best.name);
})
someone.emit('name');
best.emit('name');