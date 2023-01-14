const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log('це сабміт форми');
    const formElem = event.currentTarget.elements;

    if (formElem.email.value.trim() === '' || formElem.password.value.trim() === '') {
        return alert('Всі поля повинні бути заповнені!');
    }

    const formData = new FormData(event.currentTarget);  
    let newObjectData = Object.fromEntries(formData);
    console.log(newObjectData);
    event.currentTarget.reset();
}






