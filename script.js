const input = document.getElementById("text-input")
const counter = document.getElementById("char-count")

let count = 0;
let maxLength = 50;


function counterDisplay (textInput) {
  
  if(textInput.length <= maxLength) {
      count = textInput.length

      let result = `Character Count: ${count}/50`

       counter.textContent = result

       counter.classList.remove("limitCounter") 
       counter.classList.add("colorCount")

       if(textInput.length === maxLength) {
         counter.classList.add("limitCounter") 
         counter.classList.remove("colorCount")
       }   
  }

  if (textInput.length >= maxLength) {
   event.target.value = textInput.slice(0, maxLength)   
  } 
}

input.addEventListener("input", function (event) {(counterDisplay(event.target.value))})
