const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log('це сабміт форми');
    const {email, password} = event.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        return alert('Всі поля повинні бути заповнені!');
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    }
    
    console.log(formData);
    event.currentTarget.reset();
}






