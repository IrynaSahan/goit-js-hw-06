const inputElem = document.getElementById("validation-input");
inputElem.addEventListener('blur', onInputBlur);

const inputLength = Number(inputElem.dataset.length);

function onInputBlur(event) {
    inputElem.classList.remove("valid", "invalid");
    
    if (event.currentTarget.value.length === inputLength) {
    validInputValue();
  } else {
    invalidInputValue();
  }
     
}
const validInputValue = () => {
  inputElem.classList.add("valid");
};

const invalidInputValue = () => {
  inputElem.classList.add("invalid");
};



