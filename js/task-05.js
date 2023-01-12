const refs = {
    input: document.getElementById("name-input"),
    span: document.getElementById("name-output"),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (refs.span.textContent.length > 0,
        refs.span.textContent = event.currentTarget.value);
    else (refs.span.textContent.length === 0,
        event.currentTarget = refs.span.textContent = 'Anonymous');
};


