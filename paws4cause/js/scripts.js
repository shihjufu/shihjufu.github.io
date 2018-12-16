var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-4.jpg";
images[1] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-2.jpg";
images[2] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-3.jpg";
images[3] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-6.jpg";
images[4] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-5.jpg";
images[5] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-1.jpg";
images[6] = "http://cdn.earthporm.com/wp-content/uploads/2015/03/china-1300-stray-dog-shelter-wang-yanfang-7.jpg";

// Change Image
function changeImg() {
   document.slide.src = images[i];

   // Check If Index Is Under Max
   if (i < images.length - 1) {
      // Add 1 to Index
      i++;
   } else {
      // Reset Back To O
      i = 0;
   }

   // Run function every x seconds
   setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;