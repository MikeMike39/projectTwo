// //generate random password
// function generate() {
//   //sets password length/complexity by user choice
//   let complexity = document.getElementById("slider").value;

//   //possible password values
//   let values =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
//   //Set the Variable when the user hits the generate button
//   let password = "";

//   //for loop to choose password characters based on slider (user choice) ie 10 selected will
//   for (var i = 0; i <= complexity; i++) {
//     password =
//       password +
//       values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//   }

//   //Displays password text-box area by selecting its id "display"
//   document.getElementById("display").value = password;

//   //adds password to previously generated passwords section grabs the last password from div
//   document.getElementById("lastPasswords").innerHTML += password + "<br />";
// }

// //set default length display of 25
// document.getElementById("length").innerHTML = "Length: 25";

// //function to set length based on slider position
// document.getElementById("slider").oninput = function () {
//   if (document.getElementById("slider").value > 0) {
//     document.getElementById("length").innerHTML =
//       "Length: " + document.getElementById("slider").value;
//   } else {
//     document.getElementById("length").innerHTML = "Length: 1";
//   }
// };

// //function to copy password to clipboard
// function copyPassword() {
//   document.getElementById("display").select();

//   document.execCommand("Copy");

//   alert("Password copied to clipboard!");
// }
