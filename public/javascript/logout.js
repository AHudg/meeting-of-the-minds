async function logoutButtonHandler(event) {
    console.log(event);
    const response = await fetch('api/accounts/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logoutButtonHandler);