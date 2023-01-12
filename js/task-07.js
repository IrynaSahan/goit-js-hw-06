const inputElem = document.getElementById("font-size-control");
const spanText = document.getElementById("text");


inputElem.addEventListener('input', () => {

    spanText.style.fontSize = inputElem.value + 'px';
})


