const refs = {
    input: document.getElementById("name-input"),
    span: document.getElementById("name-output"),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
       refs.span.textContent = event.currentTarget.value.trim().length > 0 ?  event.currentTarget.value
        : 'Anonymous';
};


