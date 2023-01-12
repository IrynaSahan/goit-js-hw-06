const refs = {
    input: document.getElementById("name-input"),
    span: document.getElementById("name-output"),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
       event.currentTarget.value.length > 0 ? refs.span.textContent = event.currentTarget.value
        : refs.span.textContent = 'Anonymous';
};


