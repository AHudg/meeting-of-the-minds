async function loginFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#login-email').value.trim();
    document.querySelector('#login-email').value = '';

    const password = document.querySelector('#login-password').value.trim();
    document.querySelector('#login-password').value = '';


    if (email && password) {
        
    }
};

document.querySelector('.login-btn').addEventListener('click', loginFormHandler)