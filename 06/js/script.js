"use strict";

(function () {

})();

const messageWrapper = document.getElementById('message');

console.log(messageWrapper);

let name = prompt('What is your name?');
const age = prompt('What\'s your age?', 31);
const food = prompt('What is your favorite food?');

let message = 'Hello, ' + name + '!\n';
message += 'You are ' + age + ' years old.\n';

if (age > 30) {
   message += 'That\'s old!\n'
} else if (age < 13) {
   message += 'Should you even be on the internet?\n'
} else if (age == 0) {
   message += 'huh???\n'
}


message += 'Your favorite food is ' + food + '.';

messageWrapper.innerText = message;

//console.log(message);


//console.log('hello, ' + name + '!')
//console.log('you are ' + age + ' years old.')