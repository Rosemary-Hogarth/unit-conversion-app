/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")

convertBtn.addEventListener("click", function() {
  console.log("Clicked")
})


// user inputs a value
// card innerHTML shows length in meters and feet

// userInput.value * 3.281 = feet
// userInput.value * 0.3048 = meters
// do one calculation that results in feet and one that results in meters
// round down with isFixed(3)?
// display in card h3 + p
