const logging_in_form = document.getElementById('logging-in-form');
const formButton = logging_in_form.getElementsByTagName('button');
const email = document.getElementById('email');
const password = document.getElementById('password');
const userData = localStorage.getItem('user');
const data = JSON.parse(userData);

formButton[0].addEventListener('click', () => {
    
    if (email.checkValidity() && password.checkValidity() && password.value != '') {
        const rememberMe = document.getElementById('rememberme');
        if (rememberMe.checked) {
            const userData =  {email: email.value, password: password.value};
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            data.email='';
            localStorage.setItem('user', JSON.stringify(data));
        }
        window.location.href = './loggedPage.html';

    } else {
        alert('Please enter a valid email address.');
        email.focus();
    }
})


if(userData && data.email){
    email.value = data.email;
}else{
    email.value = '';
}
