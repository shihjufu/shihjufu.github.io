"use strict";

(function () {

})();

const messageWrapper = document.getElementById('message');

console.log(messageWrapper);

const one = parseInt(prompt('Enter first number'));
const two = parseInt(prompt('Enter second number'));
const three = parseInt(prompt('Enter third number'));
const four = parseInt(prompt('Enter fourth number'));

let message = 'Your answer is' + (one + two + three) * four


messageWrapper.innerText = message;