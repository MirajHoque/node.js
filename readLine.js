const readLine = require('readline');
//readline module allows us to prompt user as well as user input
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
//create instance of readline interface
//createInterface takes an object
//process is a global object
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`,
        (userInput) => {
            //console.log(userInput);
            if (userInput.trim() == answer) {
                rl.close();
                //when we use close it emit the close event
            } else {
                rl.setPrompt('Incorrect response please try again\n');
                //setPrompt->take an argument of string
                rl.prompt();
                //call the prompt
                rl.on('line',
                    (userInput) => {
                        if (userInput.trim() == answer)
                        //trim remove space from both side of string(start and end)
                            rl.close();
                        else {
                            rl.setPrompt(`Your answer of ${userInput} is incorrect try again \n`);
                            rl.prompt();

                        }
                    }

                )
            }

        }
    )
    //questioning the user
    //first argument is string
    //second argument is function

rl.on('close', () => {
        console.log("correct!!!!");
    }

);