(function () {

   let counter = 0;
   const originalHTML = document.body.innerHTML;
   let messageWrapper = document.getElementById('message');

   var positionX = 500;
   var positionY = 500;
   var audioD = document.createElement('audio')
   audioD.setAttribute('src', 'img/jingle.mp3')
   audioD.setAttribute('autoplay', 'autoplay')

   document.onclick = function (event) {
      event.preventDefault();
      audioD.pause();
      document.body.innerHTML = originalHTML;
      messageWrapper = document.getElementById('message');
   }

   document.onkeydown = function (event) {
      if (event.keyCode === 32) {
         event.preventDefault();
      }

   }

   document.onkeyup = function (event) {
      event.preventDefault();
      const keyCodePressed = event.keyCode;
      const coordinates = helpers.generateCoordinates();
      messageWrapper.innerText = keyCodePressed + ' : ' + event.key;

      if (keyCodePressed === 13) {
         const enterMessageDiv = document.createElement('div');
         enterMessageDiv.innerText = 'Merry Christmas!';
         messageWrapper.appendChild(enterMessageDiv);
      }

      else if (keyCodePressed === 83) {
         // s key for snow
         const degreesRotation = Math.floor(Math.random() * 45);
         const snow = document.createElement('img');
         snow.className = 'snow';
         snow.src = `img/snow.png`;
         snow.style.left = `${coordinates.x}px`;
         snow.style.top = `${coordinates.y}px`;
         snow.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
         snow.style.transform = `rotate(${degreesRotation}deg)`;
         document.body.appendChild(snow);
      }

      else if (keyCodePressed === 67) {
         // c key for santa
         const degreesRotation = Math.floor(Math.random() * 45);
         const santa = document.createElement('img');
         santa.className = 'santa';
         santa.src = `img/santa.png`;
         santa.style.left = `${coordinates.x}px`;
         santa.style.top = `${coordinates.y}px`;
         santa.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
         santa.style.tranfsform = `rotate(${degreesRotation}deg)`;
         document.body.appendChild(santa);
      }

      else if (keyCodePressed === 84) {
         // t key for tree
         const degreesRotation = Math.floor(Math.random() * 45);
         const tree = document.createElement('img');
         tree.className = 'tree';
         tree.src = `img/tree.png`;
         tree.style.left = `${coordinates.x}px`;
         tree.style.top = `${coordinates.y}px`;
         tree.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
         tree.style.transform = `rotate(${degreesRotation}deg)`;
         document.body.appendChild(tree);
      }

      counter++;
      messageWrapper.style.zIndex = counter;
   }

   setInterval(function () {
      messageWrapper.style.color = helpers.generateRandomColorString(false);
   }, 1000);

   const helpers = {
      removeClass: (cssClass) => {
         if (document.body.classList.contains(cssClass)) {
            document.body.classList.remove(cssClass);
         }
      },

      generateCoordinates: () => {
         const x = Math.floor(Math.random() * window.innerWidth);
         const y = Math.floor(Math.random() * window.innerHeight);
         return { x, y };
      },

      generateRandomColorString: (alpha = true) => {
         const r = Math.floor(Math.random() * ((255 - 130) + 1) + 130);
         const g = Math.floor(Math.random() * ((255 - 130) + 1) + 130);
         const b = Math.floor(Math.random() * ((255 - 130) + 1) + 130);
         let a = 1;
         if (alpha) {
            a = Math.random();
         }

         return `rgba(${r},${g},${b},${a})`;
      }

   }

}())
