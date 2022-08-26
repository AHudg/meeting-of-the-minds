async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#signup-username').value.trim();
    document.querySelector('#signup-username').value = '';

    const email = document.querySelector('#signup-email').value.trim();
    document.querySelector('#signup-email').value = '';

    const password = document.querySelector('#signup-password').value.trim();
    document.querySelector('#signup-password').value = '';


    if (username && email && password) {
        const response = await fetch('/api/accounts', {
            method: 'post',
            body: JSON.stringify({
                username,
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

document.querySelector('.login-btn').addEventListener('click', signupFormHandler)