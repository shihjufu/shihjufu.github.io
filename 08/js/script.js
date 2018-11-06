document.onkeyup = function (event) {
   const keyCodePressed = event.keyCode;
   document.getElementById('message').innerHTML = keyCodePressed;
   console.log(Math.random() * 100)
}

