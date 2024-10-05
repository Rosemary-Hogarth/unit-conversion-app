/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let metersConversionRate = 3.281
let litersConversionRate  = 0.264
let kilosConversionRate = 2.204

const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("user-input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {

  let inputNumber = inputEl.value
  lengthEl.innerHTML = `
    <p>
    ${inputNumber} Meters = ${ Number(inputNumber * metersConversionRate).toFixed(3) } Feet |
    ${inputNumber} Feet = ${ Number(inputNumber / metersConversionRate).toFixed(3) } Meters
    </p>`

    volumeEl.innerHTML = `
    <p>
    ${inputNumber} Liters = ${ Number(inputNumber * litersConversionRate).toFixed(3) } Gallons |
    ${inputNumber} Gallons = ${Number(inputNumber / litersConversionRate).toFixed(3)} Liters
    </p>`

    massEl.innerHTML = `
    <p>
    ${inputNumber} Kilograms = ${ Number(inputNumber * litersConversionRate).toFixed(3)} Pounds |
    ${inputNumber} Pounds = ${ Number(inputNumber / litersConversionRate).toFixed(3)} Kilograms
    </p>`
})
