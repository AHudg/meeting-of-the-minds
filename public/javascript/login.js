async function loginFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#login-email').value.trim();
    document.querySelector('#login-email').value = '';

    const password = document.querySelector('#login-password').value.trim();
    document.querySelector('#login-password').value = '';


    if (email && password) {
        const response = await fetch('/api/accounts/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        //check the response
        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-btn').addEventListener('click', loginFormHandler)