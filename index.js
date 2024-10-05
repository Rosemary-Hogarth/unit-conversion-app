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


  lengthEl.innerHTML = `
    <p>
    ${inputEl.value} Meters = ${ Number(inputEl.value * metersConversionRate).toFixed(3) } Feet |
    ${inputEl.value} Feet = ${ Number(inputEl.value / metersConversionRate).toFixed(3) } Meters
    </p>`

    volumeEl.innerHTML = `
    <p>
    ${inputEl.value} Liters = ${ Number(inputEl.value * litersConversionRate).toFixed(3) } Gallons |
    ${inputEl.value} Gallons = ${Number(inputEl.value / litersConversionRate).toFixed(3)} Liters
    </p>`

    massEl.innerHTML = `
    <p>
    ${inputEl.value} Kilograms = ${ Number(inputEl.value * litersConversionRate).toFixed(3)} Pounds |
    ${inputEl.value} Pounds = ${ Number(inputEl.value / litersConversionRate).toFixed(3)} Kilograms
    </p>`
})
